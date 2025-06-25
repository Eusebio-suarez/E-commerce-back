import { Response } from "express"
import { AuthenticatedRequest } from "../../middlewares/verifytoken"
import { searchCar } from "../../utility/searchCar"
import { getProducts } from "../../models/carModels/getProductsModel"

export const getProductsController = async (req:AuthenticatedRequest,res:Response)=>{

    try{
        //validar que exista la informacion del usuario
        if(!req.user){
            res.status(400).json({mensaje: "No se encontro la informacion de usuario"})
            return
        }
    
        //buscar el carrito que corresponde a el usuario
        const car_id = await searchCar(req.user.id)

        //validar que exista el carrito
        if(!car_id){
            res.status(400).json({mensaje: "No se encontro  el carrito"})
            return
        }

        //obtener los productos
        const products = await getProducts(car_id)

        if(!products){
            res.status(400).json({mensaje: "No se encontraron los productos"})
            return
        }

        res.status(200).json({
            success: true,
            products:products
        })

    }
    catch(e){
        res.status(400).json({mensaje: e instanceof Error ? e.message : "mensaje desconocido"})
    }

}