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
const addProductModel_1 = require("../../models/carModels/addProductModel");
const searchCar_1 = require("../../utility/searchCar");
const addProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { idProducto, cantidad } = req.body;
        //verificar que los datos del usuario estan definidos en la req
        if (!req.user) {
            throw new Error("no se encontro el usuario");
        }
        //verificar los datos
        if (!idProducto || !cantidad) {
            throw new Error("faltan campos por llenar");
        }
        // buscar el id del carrito que le pertenece a el usuario
        const carrito_id = yield (0, searchCar_1.searchCar)(req.user.id);
        if (!carrito_id) {
            res.status(400).json({ mensaje: "no se encontro el carrito" });
            return;
        }
        // validar si el producto ya estas añadido
        const productAdded = yield (0, addProductModel_1.validatProduct)(carrito_id, idProducto);
        //si no se a añadido el prudcto se crea un nuevo ragistro del producto
        if (!productAdded) {
            const added = yield (0, addProductModel_1.addProduct)(carrito_id, idProducto, cantidad);
            //validar si se agrego el producto
            if (!added) {
                res.status(400).json({ mensaje: "Error al añadir el producto" });
                return;
            }
            res.status(201).json({ mensaje: "Producto añadido correctamente" });
            return;
        }
        // si el producto ya esta añadido se va a actualizar la cantidad
        const update = yield (0, addProductModel_1.updateCuantity)(carrito_id, idProducto, cantidad);
        if (!update) {
            res.status(400).json({ mensaje: "Error al añadir al actualizar la cantidad" });
            return;
        }
        res.status(200).json({ mensaje: "Se actualizo la cantidad del producto" });
    }
    catch (e) {
        res.status(400).json({ mensaje: e instanceof Error ? e.message : "Error desconocido" });
    }
});
exports.addProductController = addProductController;
