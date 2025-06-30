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
exports.updateLibro = exports.getLibroById = void 0;
const db_1 = __importDefault(require("../../config/db"));
const getLibroById = (id_libro) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield db_1.default.query("SELECT * FROM libros_recetas WHERE id_libro = ?", [id_libro]);
    // Verificamos si existe al menos un libro
    if (rows.length === 0) {
        return null;
    }
    return rows[0]; // Retorna el primer libro encontrado
});
exports.getLibroById = getLibroById;
const updateLibro = (id_libro, nombre_libro, precio, descripcion, stock, estado, foto) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield db_1.default.query("UPDATE libros_recetas SET nombre_libro = ?, precio = ?, descripcion = ?, stock = ?, estado = ?, foto = ? WHERE id_libro = ?", [nombre_libro, precio, descripcion, stock, estado, foto, id_libro]);
    return result.affectedRows > 0; // Retorna true si se actualizó al menos un registro
});
exports.updateLibro = updateLibro;
