// src/middlewares/isAdmin.ts
import { Response, NextFunction } from 'express';
import { user } from '../types/types'; // Asegúrate de que la ruta sea correcta según tu estructura de carpetas
import { AuthenticatedRequest } from '../middlewares/verifytoken';

export const isAdmin = (req: AuthenticatedRequest, res: Response, next: NextFunction) =>  {
  const user = req.user as user | undefined;

  if (!user) {
    res.status(401).json({ message: 'Usuario no autenticado' });
    return 
  }

  if (user.rol !== 'admin') {
    res.status(403).json({ message: 'Acceso denegado: solo administradores' });
    return
  }

  next(); // El usuario es admin, continúa
};
