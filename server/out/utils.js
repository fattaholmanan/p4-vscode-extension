"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
function loglog(msg) {
    // connection.console.log(msg + "");
}
exports.loglog = loglog;
function logloglog(msg) {
    server_1.connection.console.log(msg + "");
}
exports.logloglog = logloglog;
function getDocumentSettings(resource) {
    let result = server_1.connection.workspace.getConfiguration({
        scopeUri: resource,
        section: 'p4Extension'
    });
    return result;
}
exports.getDocumentSettings = getDocumentSettings;
//# sourceMappingURL=utils.js.map