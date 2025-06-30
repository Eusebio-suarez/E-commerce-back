"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = __importDefault(require("mysql2/promise"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
//crear la conecion a la base datos
const coneccion = promise_1.default.createPool({
    "host": process.env.HOST,
    "user": process.env.USER,
    "password": process.env.PASSWORD,
    "database": process.env.DATA_BASE,
    multipleStatements: true
});
exports.default = coneccion;
