import express from "express"
import dotenv from "dotenv"
import registerRoutes from "./routes/registerRoutes";
import loginRoutes from "./routes/loginRoutes"
import logoutRoutes from "./routes/logoutRoutes"
import cookieparser from "cookie-parser"
dotenv.config()

const app = express()

const PORT=process.env.PORT || 3000

app.use(express.json())

app.use(cookieparser())
//usar las rutas registrar
app.use("/api/registrar",registerRoutes)

//uar las rutas de login}
app.use("/api/iniciarSesion",loginRoutes)

//ruta para cerrar sesion
app.use("/api/cerrarSesion",logoutRoutes)

app.listen(PORT)