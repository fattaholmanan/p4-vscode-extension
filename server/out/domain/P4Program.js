"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const P4KeywordType_1 = require("./P4KeywordType");
class P4Program {
    constructor() {
        this.headers = new Map();
        this.header_instantiations = new Map();
    }
    addHeader(h) {
        this.headers.set(h.getName(), h);
    }
    addHeaderInstantiation(headerName, instanceName) {
        let h = this.headers.get(headerName);
        this.header_instantiations.set(instanceName, h);
    }
    isEmpty() {
        return (this.headers.size + this.header_instantiations.size) == 0;
    }
    getType(keyword) {
        if (this.headers.get(keyword) != null)
            return P4KeywordType_1.P4KeywordType.HEADER_TYPE;
        if (this.header_instantiations.get(keyword) != null)
            return P4KeywordType_1.P4KeywordType.HEADER_INSTANTIATION;
        return null;
    }
    getAutoCompletion(keyword) {
        let keyType = this.getType(keyword);
        switch (keyType) {
            case P4KeywordType_1.P4KeywordType.HEADER_INSTANTIATION:
                let h1 = this.header_instantiations.get(keyword);
                return h1.getFields();
            case P4KeywordType_1.P4KeywordType.HEADER_TYPE:
                let h2 = this.headers.get(keyword);
                return h2.getFields();
        }
        return [];
    }
}
exports.P4Program = P4Program;
//# sourceMappingURL=P4Program.js.map