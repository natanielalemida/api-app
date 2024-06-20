"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
const knexFile_1 = __importDefault(require("./knexFile"));
const environment = 'development';
const connection = (0, knex_1.default)(knexFile_1.default[environment]);
exports.default = connection;
//# sourceMappingURL=connetion.js.map