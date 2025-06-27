import express from "express"
import { eliminateLibrosControllers } from "../../controllers/librosControllers/eliminateLibrosControllers"
import { verifyToken } from "../../middlewares/verifytoken"
import { isAdmin } from "../../middlewares/isAdmin"
const router = express.Router()

router.post("/",   verifyToken, isAdmin, eliminateLibrosControllers )

export default router