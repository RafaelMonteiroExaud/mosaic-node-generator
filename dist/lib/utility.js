"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchEm = void 0;
function catchEm(promise) {
    return promise.then(data => [null, data]).catch(err => [err]);
}
exports.catchEm = catchEm;
;
