import express from "express"
import { verifyToken } from "../../middlewares/verifytoken"
import { isAdmin } from "../../middlewares/isAdmin"
import { getordenController } from "../../controllers/ordesControllers/getOrderController"

const router = express.Router()

router.get("/",verifyToken,isAdmin,getordenController)

export default router
