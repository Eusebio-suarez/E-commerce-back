import { Response } from "express"
import { AuthenticatedRequest } from "../../middlewares/verifytoken"
import { eliminateLibro } from "../../models/librosModels/eliminateLibrosModels"

export const eliminateLibrosControllers= async(req:AuthenticatedRequest,res:Response)=>{
    try{
        //datos de la petcion
        const {id_libro} = req.body

        //validar si existen los datos
        if(!id_libro){
            res.status(400).json({mensaje: "No se encuentran o faltan datos"})
            return
        }

        //validar si existe el ususario
        if(!req.user){
            res.status(400).json({mensaje: "No se encontro el usuario"})
            return
        }
        
        const eliminated = await eliminateLibro(id_libro)
        
        if(!eliminated){
            res.status(400).json({mensaje: "No se pudo eliminar el libro"})
            return
        }

        res.status(200).json({mensaje: "Se elimino el libro correctamente"})

    }
    catch(e){
        res.status(400).json({mensaje: e instanceof Error ? e.message :"Error desconocido"})
    }
}