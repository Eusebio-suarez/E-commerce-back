"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdmin = void 0;
const isAdmin = (req, res, next) => {
    const user = req.user;
    if (!user) {
        res.status(401).json({ message: 'Usuario no autenticado' });
        return;
    }
    if (user.rol !== 'admin') {
        res.status(403).json({ message: 'Acceso denegado: solo administradores' });
        return;
    }
    next(); // El usuario es admin, continúa
};
exports.isAdmin = isAdmin;
