"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const verifyToken = (req, res, next) => {
    //obtener el token dese las cookies
    const token = req.cookies.access_token;
    if (!token) {
        res.status(400).json({ mesaje: "no se obtuvo el token" });
        return;
    }
    try {
        //decodificar el token
        const decoded = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY);
        //devolver la informacion del usuario al req
        req.user = decoded;
        //siguiente funcion
        next();
    }
    catch (e) {
        res.status(400).json({ mensaje: e instanceof Error ? e.message : "error desconocido" });
    }
};
exports.verifyToken = verifyToken;
