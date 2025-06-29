import express from "express"
import dotenv from "dotenv"
import registerRoutes from "./routes/userRoutes/registerRoutes";
import loginRoutes from "./routes/userRoutes/loginRoutes"
import logoutRoutes from "./routes/userRoutes/logoutRoutes"
import addProductRoutes from "./routes/carRoutes/addProductRoutes";
import eliminateProductRouter from "./routes/carRoutes/eliminateProductRoutes.ts"
import getProductsRoutes from "./routes/carRoutes/getProductsRoutes"
import addLibrosRoutes from "./routes/librosRoutes/addLibrosRoutes"
import getLibrosRoutes from "./routes/librosRoutes/getLibrosRoutes"
import eliminateLibrosRoutes from "./routes/librosRoutes/eliminateLibrosRoutes"
import updateLibrosRoutes  from "./routes/librosRoutes/updateLibrosRoutes";
import createOrdenRoutes from "./routes/ordesRoutes/createOrdenRoutes"
import getOrdenRoutes from "./routes/ordesRoutes/getOrdenRoutes"


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

//rutas para libros
app.use("/api/nuevo_libro", addLibrosRoutes)
app.use("/api/mostrar", getLibrosRoutes)
app.use("/api/eliminar", eliminateLibrosRoutes)
app.use("/api/actualizar", updateLibrosRoutes)

//rutas para las ordenes
app.use("/api/ordenes",createOrdenRoutes)
app.use("/api/ordenes",getOrdenRoutes)

app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en el puerto ${PORT}`);
});