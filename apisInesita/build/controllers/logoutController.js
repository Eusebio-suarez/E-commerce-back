"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cerrarSesion = void 0;
const cerrarSesion = (req, res) => {
    res
        .clearCookie("access_token")
        .json({ mensaje: "sesion cerrada con exito" });
};
exports.cerrarSesion = cerrarSesion;
