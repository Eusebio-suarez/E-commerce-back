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
exports.getProducts = void 0;
const db_1 = __importDefault(require("../../config/db"));
const getProducts = (car_id) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield db_1.default.query("SELECT libros_recetas.foto,libros_recetas.nombre_libro,carrito_productos.cantidad,libros_recetas.precio,carrito_productos.cantidad * libros_recetas.precio AS sub_total FROM carrito_productos JOIN libros_recetas ON libros_recetas.id_libro = carrito_productos.libro_id WHERE carrito_productos.carrito_id = ?", [car_id]);
    return rows;
});
exports.getProducts = getProducts;
