"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { areaRetangulo } from './retangulos'
// import { areaCircunferencia } from './circunferencia'
const retangulos_1 = __importDefault(require("./retangulos"));
const circunferencia_1 = require("./circunferencia");
console.log('Módulo carregado...');
console.log((0, retangulos_1.default)(10, 20));
console.log((0, circunferencia_1.areaCircunferencia)(2));
const { digaOi } = require('./novo');
console.log(digaOi('Ana'));
//# sourceMappingURL=modulos.js.map