import { RowDataPacket } from "mysql2/promise";

//interfas de usuario
export interface user extends RowDataPacket {
  id: number
  nombre: string
  correo: string
  rol: string
}