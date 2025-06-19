import  express  from "express"
import { addProduct } from "../controllers/addProductController"

const router = express.Router()

router.get("/agregar",addProduct)

export default router