import { Response } from "express"
import { AuthenticatedRequest } from "../../middlewares/verifytoken"
import { searchCar } from "../../utility/searchCar"
import { eliminateProduct } from "../../models/carModels/eliminateProductModel"

export const eliminateProductController= async(req:AuthenticatedRequest,res:Response)=>{
    try{
        //datos de la petcion
        const {idProducto,cantidad} = req.body

        //validar si existen los datos
        if(!idProducto||!cantidad){
            res.status(400).json({mensaje: "No se encuentran o faltan datos"})
            return
        }

        //validar si existe el ususario
        if(!req.user){
            res.status(400).json({mensaje: "No se encontro el usuario"})
            return
        }

        //buscar el id del carrito que corresponde a el usuario
        const carId = await searchCar(req.user.id)

        //validar si se encontro el carrito
        if(!carId){
            res.status(400).json(({mensaje: "No se encontro el carrito"}))
            return
        }

        const eliminated = await eliminateProduct(carId,idProducto,cantidad)
        
        if(!eliminated){
            res.status(400).json({mensaje: "No se pudo eliminar el producto"})
            return
        }

        res.status(200).json({mensaje: "Se elimino el producto correctamente"})

    }
    catch(e){
        res.status(400).json({mensaje: e instanceof Error ? e.message :"Error desconocido"})
    }
}