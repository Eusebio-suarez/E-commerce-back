import { Response } from "express"
import { AuthenticatedRequest } from "../../middlewares/verifytoken"
import { addProduct, searchCar, updateCuantity, validatProduct } from "../../models/carModels/addProductModel"
import coneccion from "../../config/db"

export const addProductController = async (req: AuthenticatedRequest, res: Response)=>{

    try{
        const{idProducto,cantidad} = req.body

        //verificar que los datos del usuario estan definidos en la req
        if(!req.user){
            throw new Error ("no se encontro el usuario")
        }
        
        //verificar los datos
        if(!idProducto||!cantidad){
            throw new Error ("faltan campos por llenar")
        }
        
        // buscar el id del carrito que le pertenece a el usuario
        const carrito_id = await searchCar(req.user.id)

        if(!carrito_id){
            res.status(400).json({mensaje:"no se encontro el carrito"})
            return
        }

        // validar si el producto ya estas añadido
        const productAdded = await validatProduct(carrito_id,idProducto)

        //si no se a añadido el prudcto se crea un nuevo ragistro del producto
        if(!productAdded){
            const added = await addProduct(carrito_id, idProducto, cantidad);

            //validar si se agrego el producto
            if(!added){
                res.status(400).json({mensaje:"Error al añadir el producto"})
                return
            }

            res.status(201).json({mensaje:"Producto añadido correctamente"})
            return
        }

        // si el producto ya esta añadido se va a actualizar la cantidad
        const update = await updateCuantity(carrito_id,idProducto,cantidad)

        if(!update){
            res.status(400).json({mensaje: "Error al añadir al actualizar la cantidad"})
            return
        }

        res.status(200).json({mensaje:"Se actualizo la cantidad del producto"})
    }
    catch(e){
        res.status(400).json({mensaje: e instanceof Error? e.message : "Error desconocido" })
    }
    
}