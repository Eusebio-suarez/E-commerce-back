import { Response } from "express"
import { AuthenticatedRequest } from "../../middlewares/verifytoken"
import { addProduct, searchCar } from "../../models/carModels/addProductModel"
import coneccion from "../../config/db"

export const addProductController = async (req: AuthenticatedRequest, res: Response)=>{

    try{
        const{idProducto,cantidad} = req.body

        //verificar que los datops del usuario estan definidos en la req
        if(!req.user){
            throw new Error ("no se encontro el usuario")
        }
        
        //verificar los datos
        if(!idProducto||!cantidad){
            throw new Error ("faltan campos por llenar")
        }
        
        // buscra el id del carrito que le pertenece a el usuario
        const carrito_id = await searchCar(req.user.id)

        if(!carrito_id){
            res.status(400).json({mensaje:"no se encontro el carrito"})
            return
        }

        const added = await addProduct(carrito_id, idProducto, cantidad);

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