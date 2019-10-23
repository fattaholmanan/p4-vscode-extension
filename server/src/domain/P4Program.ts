import { P4Header } from './P4Header';
import { P4KeywordType } from './P4KeywordType';
import { CompletionItemKind, CompletionItem } from 'vscode-languageserver';
import { logloglog } from '../utils';
import { P4IR } from './P4IR';


export class P4Program{
	headers: Map<string, P4Header> = new Map();
	header_instantiations: Map<string, P4Header> = new Map();
	
	addHeader(h: P4Header){
		this.headers.set(h.getName(), h);
	}
	
	addHeaderInstantiation(headerName: string, instanceName: string){
		let h: P4Header = this.headers.get(headerName);
		this.header_instantiations.set(instanceName, h);
	}

	isEmpty(): boolean {
		return (this.headers.size + this.header_instantiations.size) == 0;
	}

	getType(keyword: string): P4KeywordType {
		if(this.headers.get(keyword) != null)
			return P4KeywordType.HEADER_TYPE;
		if(this.header_instantiations.get(keyword) != null)
			return P4KeywordType.HEADER_INSTANTIATION;
		return null;
	}

	getAutoCompletion(keyword: string): CompletionItem[] {
		let keyType: P4KeywordType = this.getType(keyword);

		switch(keyType){
			case P4KeywordType.HEADER_INSTANTIATION:
				let h1: P4Header = this.header_instantiations.get(keyword);
				return h1.getFields();
			case P4KeywordType.HEADER_TYPE:
				let h2: P4Header = this.headers.get(keyword);
				return h2.getFields();
		}
		return [];
	}
}