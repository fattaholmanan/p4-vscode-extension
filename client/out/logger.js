"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLog = exports.logError = exports.logDebug = exports.logInfo = exports.log = exports.LOGGER_MODE = void 0;
const vscode = require("vscode");
var LOGGER_MODE;
(function (LOGGER_MODE) {
    LOGGER_MODE[LOGGER_MODE["DEBUG"] = 0] = "DEBUG";
    LOGGER_MODE[LOGGER_MODE["INFO"] = 1] = "INFO";
    LOGGER_MODE[LOGGER_MODE["ERROR"] = 2] = "ERROR";
    LOGGER_MODE[LOGGER_MODE["USER_LOG"] = 3] = "USER_LOG";
})(LOGGER_MODE = exports.LOGGER_MODE || (exports.LOGGER_MODE = {}));
function log(msg, mode) {
    console.log(msg);
}
exports.log = log;
function logInfo(msg) {
    log(msg, LOGGER_MODE.INFO);
}
exports.logInfo = logInfo;
function logDebug(msg) {
    log(msg, LOGGER_MODE.DEBUG);
}
exports.logDebug = logDebug;
function logError(msg) {
    log(msg, LOGGER_MODE.ERROR);
}
exports.logError = logError;
function userLog(msg) {
    vscode.window.showInformationMessage(msg);
    log(msg, LOGGER_MODE.USER_LOG);
}
exports.userLog = userLog;
//# sourceMappingURL=logger.js.map