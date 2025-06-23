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
exports.updateCuantity = exports.addProduct = exports.validatProduct = void 0;
const db_1 = __importDefault(require("../../config/db"));
const validatProduct = (carrito_id, libro_id) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield db_1.default.query("SELECT * FROM carrito_productos WHERE carrito_id = ? and libro_id = ?", [carrito_id, libro_id]);
    return rows.length > 0;
});
exports.validatProduct = validatProduct;
const addProduct = (carrito_id, libro_id, cantidad) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield db_1.default.query("insert into carrito_productos (carrito_id,libro_id,cantidad) values (?,?,?)", [carrito_id, libro_id, cantidad]);
    return rows.affectedRows > 0;
});
exports.addProduct = addProduct;
const updateCuantity = (carrito_id, id_libro, cantidad) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield db_1.default.query("UPDATE `carrito_productos` SET `cantidad` = `cantidad` + ? WHERE (`libro_id` = ?) AND (`carrito_id` = ?)", [cantidad, id_libro, carrito_id]);
    return rows.affectedRows > 0;
});
exports.updateCuantity = updateCuantity;
