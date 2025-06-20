import express, { json } from "express";
import addProductRoutes  from "./routes/addProductRoutes";
import cookieParser from "cookie-parser";
import cors from"cors"
import dotenv from "dotenv"
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

//permitir el las peticiones desde otros domminios
app.use(cors({
  origin: (origin, callback) => {
    callback(null, true);
  },
  credentials: true,
}));

app.use(express.json())
app.use(cookieParser())

app.use("/api/carrito",addProductRoutes)

app.listen(PORT,()=>{
    console.log("servidor corriendo en el puerto",PORT)
})