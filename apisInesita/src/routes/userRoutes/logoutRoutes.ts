import espress from "express";
import { cerrarSesion } from "../../controllers/userControllers/logoutController";

const router = espress.Router()

router.post("/",cerrarSesion)

export default router