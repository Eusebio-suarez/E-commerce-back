import express from "express"
import { verifyToken } from "../../middlewares/verifytoken"
import { isAdmin } from "../../middlewares/isAdmin"
import { getUserController } from "../../controllers/userControllers/getuserController"

const router = express.Router()

router.get("/",verifyToken,isAdmin,getUserController)

export default router