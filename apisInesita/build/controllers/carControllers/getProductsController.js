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
exports.getProductsController = void 0;
const searchCar_1 = require("../../utility/searchCar");
const getProductsModel_1 = require("../../models/carModels/getProductsModel");
const getProductsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //validar que exista la informacion del usuario
        if (!req.user) {
            res.status(400).json({ mensaje: "No se encontro la informacion de usuario" });
            return;
        }
        //buscar el carrito que corresponde a el usuario
        const car_id = yield (0, searchCar_1.searchCar)(req.user.id);
        //validar que exista el carrito
        if (!car_id) {
            res.status(400).json({ mensaje: "No se encontro  el carrito" });
            return;
        }
        //obtener los productos
        const products = yield (0, getProductsModel_1.getProducts)(car_id);
        if (!products) {
            res.status(400).json({ mensaje: "No se encontraron los productos" });
            return;
        }
        res.status(200).json({
            success: true,
            products: products
        });
    }
    catch (e) {
        res.status(400).json({ mensaje: e instanceof Error ? e.message : "mensaje desconocido" });
    }
});
exports.getProductsController = getProductsController;
