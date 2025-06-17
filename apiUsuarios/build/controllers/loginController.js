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
exports.login = void 0;
const loginModel_1 = require("../models/loginModel");
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config();
const SECRET_KEY = process.env.SECRET_KEY || "";
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { correo, contraseña } = req.body;
        if (!correo || !contraseña) {
            throw new Error("No se encuentran o faltan campos por llenar");
        }
        const usuario = yield (0, loginModel_1.validateUser)(correo, contraseña);
        if (!usuario) {
            res.status(401).json({ mensaje: "Correo o Contraseña incorrectos" });
            return;
        }
        const token = jsonwebtoken_1.default.sign({ nombre: usuario.nombre_usuario, correo: usuario.correo, rol: usuario.rol }, SECRET_KEY, {
            expiresIn: "1h"
        });
        res.cookie("access_token", token, {
            httpOnly: true,
            maxAge: 3600000
        });
        console.log(token);
        res.status(200).json({ mensaje: `Login exitoso ${usuario.nombre_usuario}` });
    }
    catch (e) {
        res.status(400).json({ mensaje: e instanceof Error ? e.message : "Error desconocido" });
    }
});
exports.login = login;
