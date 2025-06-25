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
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const registerModel_1 = require("../../models/userModels/registerModel");
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre, correo, contraseña } = req.body;
        if (!nombre || !correo || !contraseña) {
            throw new Error("No se encuentran o faltan campos por llenar");
        }
        const existeCorreo = yield (0, registerModel_1.validateEmail)(correo);
        if (existeCorreo) {
            res.status(409).json({ error: `El correo ${correo} ya existe. Inicie sesión.` });
            return;
        }
        const usuario = yield (0, registerModel_1.createUserAndCar)(nombre, correo, contraseña);
        if (!usuario) {
            res.status(500).json({ error: "No se pudo crear el usuario. Intenta más tarde." });
            return;
        }
        res.status(201).json({ mensaje: `Usuario ${nombre} registrado  con éxito!` });
        return;
    }
    catch (e) {
        res.status(400).json({ error: e instanceof Error ? e.message : "Error desconocido" });
        return;
    }
});
exports.registerUser = registerUser;
