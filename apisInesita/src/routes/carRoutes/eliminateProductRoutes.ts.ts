import express from "express"
import { eliminateProductController } from "../../controllers/carControllers/eliminateProductController"
import { verifyToken } from "../../middlewares/verifytoken"
const router = express.Router()

router.post("/eliminar",verifyToken,eliminateProductController)

export default router