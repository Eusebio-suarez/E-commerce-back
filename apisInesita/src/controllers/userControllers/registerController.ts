import { Request, RequestHandler, Response } from "express";
import { createUserAndCar, validateEmail } from "../../models/userModels/registerModel";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { nombre, correo, contraseña } = req.body;

    if (!nombre || !correo || !contraseña) {
      throw new Error("No se encuentran o faltan campos por llenar");
    }

    const existeCorreo = await validateEmail(correo);
    if (existeCorreo) {
      res.status(409).json({ error: `El correo ${correo} ya existe. Inicie sesión.` });
      return 
    }

    const usuario = await createUserAndCar(nombre, correo, contraseña);
    if (!usuario) {
      res.status(500).json({ error: "No se pudo crear el usuario. Intenta más tarde." });
      return 
    }
    res.status(201).json({ mensaje: `Usuario ${nombre} registrado  con éxito!` });
    return 

  } catch (e) {
    res.status(400).json({ error: e instanceof Error ? e.message : "Error desconocido" });
    return 
  }
};
