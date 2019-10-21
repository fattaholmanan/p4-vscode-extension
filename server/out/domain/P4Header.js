"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_languageserver_1 = require("vscode-languageserver");
class P4Header {
    constructor(name, headerJsonObj) {
        this.fields = new Array();
        this.name = name;
        for (let f in headerJsonObj.fields) {
            this.fields.push(headerJsonObj.fields[f]);
        }
    }
    getName() {
        return this.name;
    }
    getFields() {
        let autoList = [];
        let cnt = 0;
        this.fields.forEach((f) => {
            autoList.push({
                label: f,
                kind: vscode_languageserver_1.CompletionItemKind.Text,
                data: cnt++
            });
        });
        return autoList;
    }
}
exports.P4Header = P4Header;
//# sourceMappingURL=P4Header.js.map