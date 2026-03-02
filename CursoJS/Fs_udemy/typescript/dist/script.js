"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = sum;
function sum(a, b) {
    console.log('Dentro do escopo de módulo');
    return { result: a + b };
}
