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
exports.eliminateLibrosControllers = void 0;
const eliminateLibrosModels_1 = require("../../models/librosModels/eliminateLibrosModels");
const eliminateLibrosControllers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //datos de la petcion
        const { id_libro } = req.body;
        //validar si existen los datos
        if (!id_libro) {
            res.status(400).json({ mensaje: "No se encuentran o faltan datos" });
            return;
        }
        //validar si existe el ususario
        if (!req.user) {
            res.status(400).json({ mensaje: "No se encontro el usuario" });
            return;
        }
        const eliminated = yield (0, eliminateLibrosModels_1.eliminateLibro)(id_libro);
        if (!eliminated) {
            res.status(400).json({ mensaje: "No se pudo eliminar el libro" });
            return;
        }
        res.status(200).json({ mensaje: "Se elimino el libro correctamente" });
    }
    catch (e) {
        res.status(400).json({ mensaje: e instanceof Error ? e.message : "Error desconocido" });
    }
});
exports.eliminateLibrosControllers = eliminateLibrosControllers;
