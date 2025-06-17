"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.validateEmail = void 0;
const db_1 = __importDefault(require("./db"));
const validateEmail = (correo) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield db_1.default.query("SELECT * FROM usuarios WHERE correo = ?", [correo]);
    return rows.length > 0;
});
exports.validateEmail = validateEmail;
const createUser = (nombre, correo, contraseña) => __awaiter(void 0, void 0, void 0, function* () {
    const [resultado] = yield db_1.default.query("INSERT INTO usuarios (nombre_usuario, correo, contraseña) VALUES (?, ?, ?)", [nombre, correo, contraseña]);
    return resultado.affectedRows > 0;
});
exports.createUser = createUser;
