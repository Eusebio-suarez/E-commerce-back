import { RowDataPacket } from "mysql2/promise";

//interfas de usuario
 export interface user extends RowDataPacket {
  id: number;
  nombre_usuario: string;
  correo: string;
  rol: string
}