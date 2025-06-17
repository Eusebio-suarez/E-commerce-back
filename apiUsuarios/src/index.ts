import express from "express"
import dotenv from "dotenv"
import registerRoutes from "./routes/registerRoutes";
import loginRoutes from "./routes/loginRoutes"
import logoutRoutes from "./routes/logoutRoutes"
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

app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en el puerto ${PORT}`);
});
