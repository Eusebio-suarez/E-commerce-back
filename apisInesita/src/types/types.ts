
import { /*QueryResult,*/ RowDataPacket } from "mysql2/promise"


export interface LibrosEntry {
    id_libro: number
    nombre_libro: string
    precio: number
    descripcion: string
    stock: number 
    estado: number
    foto: string
}

export interface user extends RowDataPacket {
  id: number
  nombre: string
  correo: string
  rol: string
}

export interface AuthenticatedRequest extends Request {
  user?: user; // El usuario autenticado se añadirá aquí
}

declare global {
  namespace Express {
    interface Request {
      user?: user; // Añadimos la propiedad user al Request de Express
    }
  }
}