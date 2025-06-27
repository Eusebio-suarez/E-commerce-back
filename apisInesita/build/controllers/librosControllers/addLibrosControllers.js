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
exports.addLibrosControllers = void 0;
const addLibrosModel_1 = require("../../models/librosModels/addLibrosModel");
const addLibrosControllers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre_libro, precio, descripcion, stock, estado, foto } = req.body;
        //verificar que los datos del usuario estan definidos en la req
        if (!req.body.nombre_libro) {
            throw new Error("No se encontró el nombre del libro en la query");
        }
        //verificar los datos
        if (!nombre_libro || !precio || !descripcion || !stock || !estado || !foto) {
            throw new Error("faltan campos por llenar");
        }
        // buscar el id del carrito que le pertenece a el usuario
        /*
                const carrito_id = await searchCar(req.user.id)
        
                if(!carrito_id){
                    res.status(400).json({mensaje:"no se encontro el carrito"})
                    return
                }
        */
        //validar que el stock sea un numero positivo
        if (stock < 0) {
            res.status(400).json({ mensaje: "el stock debe ser un numero positivo" });
            return;
        }
        //validar que el precio sea un numero positivo
        if (precio < 0) {
            res.status(400).json({ mensaje: "el precio debe ser un numero positivo" });
            return;
        }
        //validar que el estado sea un numero
        if (estado < 0 || estado > 1) {
            res.status(400).json({ mensaje: "el estado debe ser un numero entre 0 y 1" });
            return;
        }
        // validar si el libro ya estas añadido
        const libroAdded = yield (0, addLibrosModel_1.validatLibro)(nombre_libro);
        if (libroAdded) {
            res.status(400).json({ mensaje: "El libro ya esta añadido" });
            return;
        }
        //si no se a añadido el libro se crea un nuevo registro del libro
        if (!libroAdded) {
            const added = yield (0, addLibrosModel_1.addLibro)(nombre_libro, precio, descripcion, stock, estado, foto);
            //validar si se agrego el libro
            if (!added) {
                res.status(400).json({ mensaje: "Error al añadir el libro" });
                return;
            }
            res.status(201).json({ mensaje: "libro fue  añadido correctamente" });
            return;
        }
        /*
        //si el producto ya esta añadido, se actualiza la cantidad
        const updated = await updateCuantity(nombre_libro, precio, descripcion, stock, estado, foto);
        //validar si se actualizo la cantidad
        if(!updated){
            res.status(400).json({mensaje:"Error al actualizar el libro"})
            return
        }
        res.status(200).json({mensaje:"libro actualizado correctamente"})
        return
        */
    }
    catch (e) {
        res.status(400).json({ mensaje: e instanceof Error ? e.message : "Error desconocido" });
    }
});
exports.addLibrosControllers = addLibrosControllers;
