import { Request,Response } from "express"

export const cerrarSesion =(req:Request,res:Response)=>{
    res
    .clearCookie("access_token")
    .json({mensaje:"sesion cerrada con exito"})
}