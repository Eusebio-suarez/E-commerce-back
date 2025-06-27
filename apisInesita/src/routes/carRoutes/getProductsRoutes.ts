import express from "express"
import { verifyToken } from "../../middlewares/verifytoken"
import { getProductsController } from "../../controllers/carControllers/getProductsController"

const router = express.Router()

router.get("/productos",verifyToken,getProductsController)

export default router