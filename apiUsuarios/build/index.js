"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const registerRoutes_1 = __importDefault(require("./routes/registerRoutes"));
const loginRoutes_1 = __importDefault(require("./routes/loginRoutes"));
const logoutRoutes_1 = __importDefault(require("./routes/logoutRoutes"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
//usar las rutas registrar
app.use("/api/registrar", registerRoutes_1.default);
//uar las rutas de login}
app.use("/api/iniciarSesion", loginRoutes_1.default);
//ruta para cerrar sesion
app.use("/api/cerrarSesion", logoutRoutes_1.default);
app.listen(PORT);
