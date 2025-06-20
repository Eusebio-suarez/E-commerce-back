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
exports.addProductController = void 0;
const addProductModel_1 = require("../models/addProductModel");
const addProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { idProducto, cantidad } = req.body;
        //verificar que los datops del usuario estan definidos en la req
        if (!req.user) {
            throw new Error("no se encontro el usuario");
        }
        const carrito_id = req.user.id;
        //verificar los datos
        if (!idProducto || !cantidad) {
            throw new Error("faltan campos por llenar");
        }
        //agregar el nuevo product
        const added = yield (0, addProductModel_1.addProduct)(carrito_id, idProducto, cantidad);
        //validar si se agrego el producto
        if (!added) {
            res.status(400).json({ mensaje: "Error al añadir el producto" });
            return;
        }
        res.status(201).json({ mensaje: " producto añadido correctamente" });
    }
    catch (e) {
        res.status(400).json({ mensaje: e instanceof Error ? e.message : "Error desconocido" });
    }
});
exports.addProductController = addProductController;
