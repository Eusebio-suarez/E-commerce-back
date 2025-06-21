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
exports.searchCar = exports.addProduct = void 0;
const db_1 = __importDefault(require("../../config/db"));
const addProduct = (carrito_id, libro_id, cantidad) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield db_1.default.query("insert into carrito_productos (carrito_id,libro_id,cantidad) values (?,?,?)", [carrito_id, libro_id, cantidad]);
    return rows.affectedRows > 0;
});
exports.addProduct = addProduct;
const searchCar = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const [carrito] = yield db_1.default.query("SELECT id FROM carrito WHERE user_id = ?", userId);
    // Verifica si se encontró un carrito
    if (carrito.length === 0) {
        return null;
    }
    // Devuelve el id del carrito
    return carrito[0].id;
});
exports.searchCar = searchCar;
