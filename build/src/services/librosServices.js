"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addLibros = exports.findById = exports.getEntries = void 0;
const libros_json_1 = __importDefault(require("./libros.json"));
const libros = libros_json_1.default;
const getEntries = () => libros;
exports.getEntries = getEntries;
const findById = (id_libro) => {
    const entry = libros.find(d => d.id_libro == id_libro);
    return entry;
};
exports.findById = findById;
const addLibros = (newLibrosEntry) => {
    const newLibros = Object.assign({ id: libros.length + 1 }, newLibrosEntry);
    libros.push(newLibros);
    return newLibros;
};
exports.addLibros = addLibros;
