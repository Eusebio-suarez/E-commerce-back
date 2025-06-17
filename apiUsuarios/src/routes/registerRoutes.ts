import express, { Request, Response } from "express";
import { registerUser } from "../controllers/registerController"

const router = express.Router()

//resgitrar
router.post("/", registerUser);

export default router;