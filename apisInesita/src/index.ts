import express from "express"
import dotenv from "dotenv"
import registerRoutes from "./routes/userRoutes/registerRoutes";
import loginRoutes from "./routes/userRoutes/loginRoutes"
import logoutRoutes from "./routes/userRoutes/logoutRoutes"
import addProductRoutes from "./routes/carRoutes/addProductRoutes";
import eliminateProductRouter from "./routes/carRoutes/eliminateProductRoutes.ts"
import getProductsRoutes from "./routes/carRoutes/getproductsRoutes"
import cookieParser from "cookie-parser"
import cors from "cors"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

// ✅ CORS configurado correctamente
app.use(cors({
  origin: (origin, callback) => {
    callback(null, true); // permite cualquier origen
  },
  credentials: true,
}));

app.use(express.json())
app.use(cookieParser())

app.use("/api/registrar", registerRoutes)
app.use("/api/iniciarSesion", loginRoutes)
app.use("/api/cerrarSesion", logoutRoutes)

app.use("/api/carrito",addProductRoutes)
app.use("/api/carrito",eliminateProductRouter)
app.use("/api/carrito",getProductsRoutes)


app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en el puerto ${PORT}`);
});