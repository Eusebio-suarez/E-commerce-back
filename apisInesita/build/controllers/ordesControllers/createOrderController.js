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
exports.createOrderContoller = void 0;
const searchCar_1 = require("../../utility/searchCar");
const createOrderModel_1 = require("../../models/ordersModels/createOrderModel");
const createOrderContoller = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //verificar que exista el usuario
        if (!req.user) {
            throw new Error("No se encontro el usuario");
        }
        //buscar el cxarrito del usuario
        const carrito_id = yield (0, searchCar_1.searchCar)(req.user.id);
        if (!carrito_id) {
            res.status(400).json({ mensaje: "No se encontro el carrito del usuario" });
            return;
        }
        //calcular el total del carrito
        const total = yield (0, createOrderModel_1.calculatePrice)(carrito_id);
        if (!total || total === 0) {
            res.status(400).json({ mensaje: "el carrito esta vacio" });
            return;
        }
        //id del usuario
        const idUser = req.user.id;
        //crear la orden
        const order = yield (0, createOrderModel_1.createOrder)(idUser, total, carrito_id);
        //verificar lacreacion de la orden 
        if (!order) {
            res.status(400).json({ mensaje: "error al crear la orden" });
            return;
        }
        //creacion correcta
        res.status(201).json({ mensaje: "orden creada correctamente" });
    }
    catch (e) {
        res.status(400).json({ mensaje: e instanceof Error ? e.message : "Error desconocido" });
    }
});
exports.createOrderContoller = createOrderContoller;
