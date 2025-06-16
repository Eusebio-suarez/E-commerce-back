import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // <--- IMPORTAR CORS
import registerRoutes from "./routes/registerRoutes";
import loginRoutes from "./routes/loginRoutes";
import logoutRoutes from "./routes/logoutRoutes";
import cookieparser from "cookie-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Habilita CORS para todos los orígenes
app.use(cors()); // <--- PERMITE CUALQUIER ORIGEN

app.use(express.json());
app.use(cookieparser());

app.use("/api/registrar", registerRoutes);
app.use("/api/iniciarSesion", loginRoutes);
app.use("/api/cerrarSesion", logoutRoutes);

app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en el puerto ${PORT}`);
});
