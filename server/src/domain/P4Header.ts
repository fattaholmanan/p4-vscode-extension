import { CompletionItemKind, CompletionItem } from 'vscode-languageserver';

export class P4Header {
	name: string;
	fields: Array<string> = new Array(); 

	constructor(name: string, headerJsonObj: any){
		this.name = name;
		for(let f in headerJsonObj.fields){
			this.fields.push(headerJsonObj.fields[f]);
		}
	}

	getName(){
		return this.name;
	}

	getFields(): CompletionItem[] {
		let autoList = [];
		let cnt: number = 0;

		this.fields.forEach((f: string) => {
			autoList.push({
				label: f,
				kind: CompletionItemKind.Text,
				data: cnt++
			});	
		});
		return autoList;
	}
}