import express, { Request, Response } from "express";
import { registrarUsuario } from "../controllers/registerController"

const router = express.Router()

//resgitrar
router.post("/", registrarUsuario);

export default router;