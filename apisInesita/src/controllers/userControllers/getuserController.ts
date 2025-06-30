import { Request,Response } from "express"
import { getUsers } from "../../models/userModels/getUserModel"

export const getUserController = async (req:Request,res:Response)=>{
    try{
        //obtener los usuarios
        const users = await getUsers()

        //validar usuarios
        if(!users){
            res.status(400).json({mensaje: "Error al obtener usuarios"})
            return
        }

        //enviar los usuarios
        res.status(200).json(users)

    }catch(e){
        res.status(400).json({mensaje: e instanceof Error ? e.message : "Error desconocido"})
    }
}