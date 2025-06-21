import exprees from "express";
import { login } from "../../controllers/userControllers/loginController";

const router = exprees.Router()

router.post("/", login)

export default router;                               