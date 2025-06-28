import { AuthenticatedRequest } from "../../middlewares/verifytoken";
import { updateLibro, validatLibro } from "../../models/librosModels/updateLibrosModels";
import { Response } from "express"


export const updateLibrosControllers = async (req: AuthenticatedRequest, res: Response)=>{

    try{
        const{nombre_libro, precio, descripcion, stock, estado, foto } = req.body

        //verificar que los datos del usuario estan definidos en la req
        if (!req.body.nombre_libro) {
        throw new Error("No se encontró el nombre del libro en la query");
        }
        //verificar los datos
        if(!nombre_libro||!precio||!descripcion||!stock||!estado||!foto){
            throw new Error ("faltan campos por llenar")
        }
        
        //validar que el stock sea un numero positivo
        if(stock < 0){
            res.status(400).json({mensaje:"el stock debe ser un numero positivo"})
            return
        }
        //validar que el precio sea un numero positivo
        if(precio < 0){
            res.status(400).json({mensaje:"el precio debe ser un numero positivo"})
            return
        }
        //validar que el estado sea un numero
        if(estado < 0 || estado > 1){
            res.status(400).json({mensaje:"el estado debe ser un numero entre 0 y 1"})
            return
        }
        
        // validar si el libro ya estas añadido
        const libroUpdate = await validatLibro(nombre_libro )

        if(libroUpdate){
            res.status(400).json({mensaje:"El libro ya esta actualizado"})
            return
        }
        //si no se a añadido el libro se crea un nuevo registro del libro
        if(!libroUpdate){
            const added = await updateLibro(nombre_libro, precio, descripcion, stock, estado, foto);

            //validar si se agrego el libro
            if(!added){
                res.status(400).json({mensaje:"Error al actualizar el libro"})
                return
            }

            res.status(201).json({mensaje:"libro fue actualizado correctamente"})
            return
        }

        
       
    }
    catch(e){
        res.status(400).json({mensaje: e instanceof Error? e.message : "Error desconocido" })
    }
    
}