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
exports.eliminateProductController = void 0;
const searchCar_1 = require("../../utility/searchCar");
const eliminateProductModel_1 = require("../../models/carModels/eliminateProductModel");
const eliminateProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //datos de la petcion
        const { idProducto, cantidad } = req.body;
        //validar si existen los datos
        if (!idProducto || !cantidad) {
            res.status(400).json({ mensaje: "No se encuentran o faltan datos" });
            return;
        }
        //validar si existe el ususario
        if (!req.user) {
            res.status(400).json({ mensaje: "No se encontro el usuario" });
            return;
        }
        //buscar el id del carrito que corresponde a el usuario
        const carId = yield (0, searchCar_1.searchCar)(req.user.id);
        //validar si se encontro el carrito
        if (!carId) {
            res.status(400).json(({ mensaje: "No se encontro el carrito" }));
            return;
        }
        const eliminated = yield (0, eliminateProductModel_1.eliminateProduct)(carId, idProducto, cantidad);
        if (!eliminated) {
            res.status(400).json({ mensaje: "No se pudo eliminar el producto" });
            return;
        }
        res.status(200).json({ mensaje: "Se elimino el producto correctamente" });
    }
    catch (e) {
        res.status(400).json({ mensaje: e instanceof Error ? e.message : "Error desconocido" });
    }
});
exports.eliminateProductController = eliminateProductController;
