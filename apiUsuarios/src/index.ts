import express from "express"
import dotenv from "dotenv"
import registerRoutes from "./routes/registerRoutes";
import loginRoutes from "./routes/loginRoutes"
import cookieparser from "cookie-parser"
dotenv.config()

const app = express()

const PORT=process.env.PORT

app.use(express.json())

app.use(cookieparser())
//usar las rutas registrar
app.use("/api/registrar",registerRoutes)

//uar las rutas de login}
app.use("/api/iniciarSesion",loginRoutes)

app.listen(PORT)