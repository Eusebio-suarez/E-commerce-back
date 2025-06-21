import  express  from "express"
import { addProductController } from "../../controllers/carControllers/addProductController"
import { verifyToken } from "../../middlewares/verifytoken"

const router = express.Router()

router.post("/agregar",verifyToken,addProductController)

export default router