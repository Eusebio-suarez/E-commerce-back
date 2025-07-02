import { Request,Response } from "express"
import { validateUser } from "../../models/userModels/loginModel"
import dotenv from "dotenv"
import jwt from "jsonwebtoken"
import cookieParser from "cookie-parser"    
dotenv.config()

const SECRET_KEY=process.env.SECRET_KEY||""

export const login = async (req:Request,res:Response)=>{

    try{
        const {correo,contraseña} =req.body

        if(!correo || !contraseña){
            throw new Error("No se encuentran o faltan campos por llenar")
        }

        const usuario = await validateUser(correo,contraseña)

        if(!usuario){
            res.status(401).json({mensaje: "Correo o Contraseña incorrectos"})
            return
        }

        const token =
        jwt.sign({ id: usuario.id_usuario, nombre: usuario.nombre_usuario, correo: usuario.correo, rol: usuario.rol},SECRET_KEY,{
            expiresIn: "1h"
        })

        res.cookie("access_token", token, {
        httpOnly: true,
        maxAge: 3600000,
        sameSite: "none", // 👈 OBLIGATORIO para permitir envío entre dominios
        secure: true      // 👈 OBLIGATORIO si tu backend está en HTTPS (Render lo es)
        });

        res.status(200).json({mensaje: `Login exitoso ${usuario.nombre_usuario}`})
    }

    catch(e){
        res.status(400).json({mensaje: e instanceof Error? e.message : "Error desconocido"})
    }
}