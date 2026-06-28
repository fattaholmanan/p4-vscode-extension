/**
 * Evaluates a C-preprocessor `#if` / `#elif` constant expression to a number
 * (0 = false, non-zero = true). The caller is expected to have already replaced
 * `defined(X)` and expanded macros; any identifier still present evaluates to 0,
 * matching C preprocessor semantics.
 */
export function evaluateCondition(expr: string): number {
	try {
		return new ExpressionParser(expr).parse();
	} catch {
		return 0;
	}
}

type Tok = { kind: 'num'; value: number } | { kind: 'op'; value: string } | { kind: 'id' };

class ExpressionParser {
	private readonly tokens: Tok[] = [];
	private pos = 0;

	constructor(input: string) {
		this.tokenize(input);
	}

	private tokenize(input: string): void {
		const ops = ['<<', '>>', '<=', '>=', '==', '!=', '&&', '||'];
		let i = 0;
		while (i < input.length) {
			const c = input[i];
			if (/\s/.test(c)) {
				i++;
				continue;
			}
			if (/[0-9]/.test(c)) {
				let j = i;
				while (j < input.length && /[0-9a-fA-FxXoObB_]/.test(input[j])) {
					j++;
				}
				const raw = input.slice(i, j).replace(/[uUlL]+$/, '');
				this.tokens.push({ kind: 'num', value: parseIntLiteral(raw) });
				i = j;
				continue;
			}
			if (/[A-Za-z_]/.test(c)) {
				let j = i;
				while (j < input.length && /[A-Za-z0-9_]/.test(input[j])) {
					j++;
				}
				// An unresolved identifier is 0 per C preprocessor rules.
				this.tokens.push({ kind: 'id' });
				i = j;
				continue;
			}
			const two = input.slice(i, i + 2);
			if (ops.includes(two)) {
				this.tokens.push({ kind: 'op', value: two });
				i += 2;
				continue;
			}
			this.tokens.push({ kind: 'op', value: c });
			i++;
		}
	}

	parse(): number {
		const v = this.ternary();
		return v;
	}

	private peek(): Tok | undefined {
		return this.tokens[this.pos];
	}

	private eat(op: string): boolean {
		const t = this.peek();
		if (t && t.kind === 'op' && t.value === op) {
			this.pos++;
			return true;
		}
		return false;
	}

	private ternary(): number {
		const cond = this.binary(0);
		if (this.eat('?')) {
			const a = this.ternary();
			this.eat(':');
			const b = this.ternary();
			return cond ? a : b;
		}
		return cond;
	}

	// Precedence-climbing for binary operators.
	private static readonly PREC: Record<string, number> = {
		'||': 1, '&&': 2, '|': 3, '^': 4, '&': 5,
		'==': 6, '!=': 6,
		'<': 7, '<=': 7, '>': 7, '>=': 7,
		'<<': 8, '>>': 8,
		'+': 9, '-': 9,
		'*': 10, '/': 10, '%': 10,
	};

	private binary(minPrec: number): number {
		let left = this.unary();
		for (;;) {
			const t = this.peek();
			if (!t || t.kind !== 'op') {
				break;
			}
			const prec = ExpressionParser.PREC[t.value];
			if (prec === undefined || prec < minPrec) {
				break;
			}
			this.pos++;
			const right = this.binary(prec + 1);
			left = applyBinary(t.value, left, right);
		}
		return left;
	}

	private unary(): number {
		const t = this.peek();
		if (t && t.kind === 'op') {
			if (t.value === '!') {
				this.pos++;
				return this.unary() ? 0 : 1;
			}
			if (t.value === '~') {
				this.pos++;
				return ~this.unary();
			}
			if (t.value === '-') {
				this.pos++;
				return -this.unary();
			}
			if (t.value === '+') {
				this.pos++;
				return this.unary();
			}
		}
		return this.primary();
	}

	private primary(): number {
		const t = this.peek();
		if (!t) {
			return 0;
		}
		if (t.kind === 'op' && t.value === '(') {
			this.pos++;
			const v = this.ternary();
			this.eat(')');
			return v;
		}
		if (t.kind === 'num') {
			this.pos++;
			return t.value;
		}
		if (t.kind === 'id') {
			this.pos++;
			return 0;
		}
		this.pos++;
		return 0;
	}
}

function applyBinary(op: string, a: number, b: number): number {
	switch (op) {
		case '||': return a || b ? 1 : 0;
		case '&&': return a && b ? 1 : 0;
		case '|': return a | b;
		case '^': return a ^ b;
		case '&': return a & b;
		case '==': return a === b ? 1 : 0;
		case '!=': return a !== b ? 1 : 0;
		case '<': return a < b ? 1 : 0;
		case '<=': return a <= b ? 1 : 0;
		case '>': return a > b ? 1 : 0;
		case '>=': return a >= b ? 1 : 0;
		case '<<': return a << b;
		case '>>': return a >> b;
		case '+': return a + b;
		case '-': return a - b;
		case '*': return a * b;
		case '/': return b === 0 ? 0 : Math.trunc(a / b);
		case '%': return b === 0 ? 0 : a % b;
		default: return 0;
	}
}

function parseIntLiteral(raw: string): number {
	const cleaned = raw.replace(/_/g, '');
	if (/^0[xX]/.test(cleaned)) {
		return parseInt(cleaned.slice(2), 16) || 0;
	}
	if (/^0[bB]/.test(cleaned)) {
		return parseInt(cleaned.slice(2), 2) || 0;
	}
	if (/^0[oO]/.test(cleaned)) {
		return parseInt(cleaned.slice(2), 8) || 0;
	}
	if (/^0[0-7]+$/.test(cleaned)) {
		return parseInt(cleaned, 8) || 0;
	}
	return parseInt(cleaned, 10) || 0;
}
