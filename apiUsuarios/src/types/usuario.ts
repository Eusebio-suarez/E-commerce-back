import { RowDataPacket } from "mysql2/promise";

//interfas de usuario
 export interface Usuario extends RowDataPacket {
  id: number;
  nombre_usuario: string;
  correo: string;
  contraseña: string;
}