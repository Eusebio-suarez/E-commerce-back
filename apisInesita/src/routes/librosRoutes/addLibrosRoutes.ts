import  express  from "express"
import { addLibrosControllers } from "../../controllers/librosControllers/addLibrosControllers"
import { verifyToken } from "../../middlewares/verifytoken"
import { isAdmin } from "../../middlewares/isAdmin"


const router = express.Router()


router.post('/', verifyToken, isAdmin, addLibrosControllers)

export default router

