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
exports.createDetails = exports.createOrder = exports.calculatePrice = void 0;
const db_1 = __importDefault(require("../../config/db"));
const emptyCar_1 = require("../../utility/emptyCar");
const calculatePrice = (carrito_id) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield db_1.default.query("select sum(lr.precio * cp.cantidad) as total from libros_recetas lr join carrito_productos cp on lr.id_libro = cp.libro_id where carrito_id = ?", [carrito_id]);
    if (rows[0].total === 0 || rows[0].total === null) {
        return 0;
    }
    return rows[0].total;
});
exports.calculatePrice = calculatePrice;
const createOrder = (id_usuario, total, carrito_id) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield db_1.default.query("INSERT INTO ordenes (`id_usuario_compra`, `precio_total`) VALUES (?, ?);", [id_usuario, total]);
    if (rows.affectedRows === 0) {
        return false;
    }
    //id de la orden que se creo
    const orderId = rows.insertId;
    //crear el detalle de orden
    const order = yield (0, exports.createDetails)(orderId, carrito_id);
    //vaciar el carrito
    yield (0, emptyCar_1.emptyCar)(carrito_id);
    return order;
});
exports.createOrder = createOrder;
const createDetails = (id_orden, carrito_id) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield db_1.default.query("insert into orden_detalle(orden_id,libro_id,cantidad,precio_unitario) select ?,cp.libro_id,cp.cantidad,lr.precio from carrito_productos cp join libros_recetas lr on cp.libro_id = lr.id_libro where cp.carrito_id = ?", [id_orden, carrito_id]);
    return rows.affectedRows > 0;
});
exports.createDetails = createDetails;
