export interface SourcePosition {
	uri: string;
	offset: number;
}

interface Segment {
	outStart: number;
	length: number;
	uri: string;
	srcStart: number;
	/** Synthetic segments (e.g. macro expansions) map every output offset to a single source point. */
	synthetic: boolean;
}

/**
 * Accumulates the flattened preprocessor output while remembering, for every run
 * of output characters, which source file/offset it came from. This lets the
 * server translate parser positions (in the flattened text) back to the correct
 * original file and offset.
 */
export class SourceMap {
	text = '';
	private readonly segments: Segment[] = [];

	/** Append text copied verbatim from `uri` starting at `srcStart`. */
	emit(uri: string, srcStart: number, text: string): void {
		this.push(uri, srcStart, text, false);
	}

	/** Append generated text (e.g. a macro expansion) attributed to one source point. */
	emitSynthetic(uri: string, srcStart: number, text: string): void {
		this.push(uri, srcStart, text, true);
	}

	private push(uri: string, srcStart: number, text: string, synthetic: boolean): void {
		if (text.length === 0) {
			return;
		}
		this.segments.push({ outStart: this.text.length, length: text.length, uri, srcStart, synthetic });
		this.text += text;
	}

	/** Translate an offset in the flattened text back to its originating file/offset. */
	resolve(outOffset: number): SourcePosition {
		if (this.segments.length === 0) {
			return { uri: '', offset: 0 };
		}

		let lo = 0;
		let hi = this.segments.length - 1;
		let idx = 0;
		while (lo <= hi) {
			const mid = (lo + hi) >> 1;
			const seg = this.segments[mid];
			if (outOffset < seg.outStart) {
				hi = mid - 1;
			} else if (outOffset >= seg.outStart + seg.length) {
				idx = mid;
				lo = mid + 1;
			} else {
				idx = mid;
				break;
			}
		}

		const seg = this.segments[idx];
		if (seg.synthetic) {
			return { uri: seg.uri, offset: seg.srcStart };
		}
		const delta = Math.min(Math.max(outOffset - seg.outStart, 0), Math.max(seg.length - 1, 0));
		return { uri: seg.uri, offset: seg.srcStart + delta };
	}
}
