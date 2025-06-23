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
exports.eliminateProduct = void 0;
const db_1 = __importDefault(require("../../config/db"));
const eliminateProduct = (carrito_id, id_libro, cantidad) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield db_1.default.query("UPDATE `carrito_productos` SET `cantidad` = `cantidad` - ? WHERE (`libro_id` = ?) AND (`carrito_id` = ?)", [cantidad, id_libro, carrito_id]);
    return rows.affectedRows > 0;
});
exports.eliminateProduct = eliminateProduct;
