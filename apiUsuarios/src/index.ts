import express from "express"
import dotenv from "dotenv"
import registerRoutes from "./routes/registerRoutes";
dotenv.config()

const app = express()

const PORT=process.env.PORT

app.use(express.json())

//usar las rutas registrar
app.use("/api/registrar",registerRoutes)

app.listen(PORT)