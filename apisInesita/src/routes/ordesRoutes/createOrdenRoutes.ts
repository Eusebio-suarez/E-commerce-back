import express from "express"
import { verifyToken } from "../../middlewares/verifytoken"
import { createOrderContoller } from "../../controllers/ordesControllers/createOrderController"

const router = express.Router()

router.post("/crear",verifyToken,createOrderContoller)

export default router