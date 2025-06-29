import { Request,Response } from "express"
import { getOrders } from "../../models/ordersModels/getOrderModel"

export const getordenController = async(req:Request,res:Response)=>{
    try{
        //obtener las ordenes
        const orders = await getOrders()

        //validar las ordenes
        if(!orders){
            res.status(400).json({mensaje: "Error al obtener las ordenes"})
            return
        }

        //devolver las ordenes
        res.status(200).json(orders)

    }catch(e){
        res.status(400).json({mensaje: e instanceof Error ? e.message: "error desconocido"})
    }
}