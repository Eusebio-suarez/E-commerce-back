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
exports.updateLibrosControllers = void 0;
const updateLibrosModels_1 = require("../../models/librosModels/updateLibrosModels");
const updateLibrosControllers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id_libro = Number(req.params.id_libro);
        if (isNaN(id_libro)) {
            res.status(400).json({ mensaje: "ID de libro inválido" });
            return;
        }
        const { nombre_libro, precio, descripcion, stock, estado, foto, } = req.body;
        if (!nombre_libro || precio === undefined || !descripcion || stock === undefined || estado === undefined || !foto) {
            res.status(400).json({ mensaje: "Faltan datos obligatorios" });
            return;
        }
        const actualizado = yield (0, updateLibrosModels_1.updateLibro)(id_libro, nombre_libro, precio, descripcion, stock, estado, foto);
        if (actualizado) {
            res.status(200).json({ mensaje: "Libro actualizado con éxito" });
        }
        else {
            res.status(404).json({ mensaje: "Libro no encontrado" });
        }
    }
    catch (error) {
        console.error("Error al actualizar libro:", error);
        res.status(500).json({ mensaje: "Error interno del servidor" });
    }
});
exports.updateLibrosControllers = updateLibrosControllers;
