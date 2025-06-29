import { Response } from "express";
import { AuthenticatedRequest } from "../../middlewares/verifytoken";
import { searchCar } from "../../utility/searchCar";
import { calculatePrice, createOrder } from "../../models/ordersModels/createOrderModel";

export const createOrderContoller = async(req:AuthenticatedRequest,res:Response)=>{
    try{
        //verificar que exista el usuario
        if(!req.user){
            throw new Error("No se encontro el usuario");
        }

        //buscar el cxarrito del usuario
        const carrito_id = await searchCar(req.user.id)
        
        if(!carrito_id){
            res.status(400).json({mensaje:"No se encontro el carrito del usuario"});
            return
        }

        //calcular el total del carrito
        const total = await calculatePrice(carrito_id)

        if(!total || total === 0){
            res.status(400).json({mensaje:"el carrito esta vacio"});
            return
        }

        //id del usuario
        const idUser =req.user.id

        //crear la orden
        const order = await createOrder(idUser,total,carrito_id)
        
        //verificar lacreacion de la orden 
        if(!order){
            res.status(400).json({mensaje:"error al crear la orden"});
            return
        }

        //creacion correcta
        res.status(201).json({mensaje:"orden creada correctamente"})
    }
    catch(e){
        res.status(400).json({mensaje: e instanceof Error? e.message : "Error desconocido"})
    }
}