import { Request, Response } from "express"
import { getLibros } from "../../models/librosModels/getLibrosModels"

export const getLibrosControllers = async (_req: Request, res:Response)=>{

    try{
        //validar que exista la informacion del usuario
        
   
       
        //obtener los libros
        const libros = await getLibros()

        if(!libros){
            res.status(400).json({ mensaje: "No se encontro ningun libro" })
            return
        }

        res.status(200).json({
            success: true,
            libros: libros          
        })

    }
    catch(e){
        res.status(400).json({mensaje: e instanceof Error ? e.message : "mensaje desconocido"})
    }

}