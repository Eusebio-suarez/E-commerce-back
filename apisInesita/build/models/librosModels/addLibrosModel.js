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
exports.addLibro = exports.validatLibro = void 0;
const db_1 = __importDefault(require("../../config/db"));
const validatLibro = (libro_id) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield db_1.default.query("SELECT * FROM libros_recetas WHERE libro_id = ?", [libro_id]);
    return rows.length > 0;
});
exports.validatLibro = validatLibro;
const addLibro = (nombre_libro, precio, descripcion, stock, estado, foto) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield db_1.default.query("insert into libros_recetas (nombre_libro,precio,descripcion,stock,estado,foto) values (?,?,?,?,?,?)", [nombre_libro, precio, descripcion, stock, estado, foto]);
    return rows.affectedRows > 0;
});
exports.addLibro = addLibro;
/*
export const updateLibro = async(id_libro:number, nombre_libro:string, precio:number, descripcion:string, stock:number, estado:number, foto:string):Promise<boolean>=>{
    const [rows] = await coneccion.query<ResultSetHeader>("UPDATE libros_recetas SET nombre_libro = ?, precio = ?, descripcion = ?, stock = ?, estado = ?, foto = ? WHERE id_libro = ?", [nombre_libro, precio, descripcion, stock, estado, foto, id_libro])
    return rows.affectedRows > 0
}

*/
