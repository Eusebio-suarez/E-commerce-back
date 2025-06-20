import { Request,Response } from "express"
import { AuthenticatedRequest } from "../middlewares/verifytoken"
import { addProduct } from "../models/addProductModel"

export const addProductController = async (req: AuthenticatedRequest, res: Response)=>{

    try{
        const{idProducto,cantidad} = req.body

        //verificar que los datops del usuario estan definidos en la req
        if(!req.user){
            throw new Error ("no se encontro el usuario")
        }

        const carrito_id = req.user.id
        
        //verificar los datos
        if(!idProducto||!cantidad){
            throw new Error ("faltan campos por llenar")
        }

        //agregar el nuevo product
        const added = await addProduct(carrito_id, idProducto, cantidad)

        //validar si se agrego el producto
        if(!added){
            res.status(400).json({mensaje:"Error al añadir el producto"})
            return
        }

        res.status(201).json({mensaje:" producto añadido correctamente"})

    }
    catch(e){
        res.status(400).json({mensaje: e instanceof Error? e.message : "Error desconocido" })
    }
    
}