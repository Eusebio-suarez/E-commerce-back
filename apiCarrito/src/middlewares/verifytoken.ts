import { Request,Response,NextFunction } from "express"
import jwt, { JwtPayload } from "jsonwebtoken"
import dotenv from "dotenv"
import { user } from "../types/usertypes"

dotenv.config()

 export interface AuthenticatedRequest extends Request{
    user?:user
}

export const verifyToken =(req:AuthenticatedRequest,res:Response,next:NextFunction)=>{
    //obtener el token dese las cookies
    const token = req.cookies.access_token

    if(!token){
        res.status(400).json({mesaje: "no se obtuvo el token"})
    }

    try{
        //decodificar el token
        const decoded = jwt.verify(token,process.env.SECRET_KEY!) as user
        //devolver la informacion del usuario al req
        req.user = decoded;
        //siguiente funcion
        next()
    }
    catch(e){
        res.status(400).json({mensaje: e instanceof Error? e.message: "error desconocido"})
    }

}
