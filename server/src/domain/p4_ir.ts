import { P4IRTypes } from './p4_ir_types' ;
export class P4IR{
	private symbols: Map<string, P4IR> = new Map();
	private type: P4IRTypes;


	// getAutoCompletion(keyword: string): CompletionItem[] {
	// 	let keyType: P4KeywordType = this.getType(keyword);

	// 	switch(keyType){
	// 		case P4KeywordType.HEADER_INSTANTIATION:
	// 			let h1: P4Header = this.header_instantiations.get(keyword);
	// 			return h1.getFields();
	// 		case P4KeywordType.HEADER_TYPE:
	// 			let h2: P4Header = this.headers.get(keyword);
	// 			return h2.getFields();
	// 	}
	// 	return [];
	// }
}