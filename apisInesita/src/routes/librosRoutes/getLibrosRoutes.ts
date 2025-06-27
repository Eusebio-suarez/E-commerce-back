import express from "express"
import { getLibrosControllers } from "../../controllers/librosControllers/getLibrosControllers"

const router = express.Router()

router.get("/", getLibrosControllers)

export default router