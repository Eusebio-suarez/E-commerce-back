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
exports.getLibrosControllers = void 0;
const getLibrosModels_1 = require("../../models/librosModels/getLibrosModels");
const getLibrosControllers = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //validar que exista la informacion del usuario
        //obtener los libros
        const libros = yield (0, getLibrosModels_1.getLibros)();
        if (!libros) {
            res.status(400).json({ mensaje: "No se encontro ningun libro" });
            return;
        }
        res.status(200).json({
            success: true,
            libros: libros
        });
    }
    catch (e) {
        res.status(400).json({ mensaje: e instanceof Error ? e.message : "mensaje desconocido" });
    }
});
exports.getLibrosControllers = getLibrosControllers;
