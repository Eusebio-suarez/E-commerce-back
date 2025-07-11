"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const registerRoutes_1 = __importDefault(require("./routes/userRoutes/registerRoutes"));
const loginRoutes_1 = __importDefault(require("./routes/userRoutes/loginRoutes"));
const logoutRoutes_1 = __importDefault(require("./routes/userRoutes/logoutRoutes"));
const addProductRoutes_1 = __importDefault(require("./routes/carRoutes/addProductRoutes"));
const eliminateProductRoutes_ts_1 = __importDefault(require("./routes/carRoutes/eliminateProductRoutes.ts"));
const getProductsRoutes_1 = __importDefault(require("./routes/carRoutes/getProductsRoutes"));
const addLibrosRoutes_1 = __importDefault(require("./routes/librosRoutes/addLibrosRoutes"));
const getLibrosRoutes_1 = __importDefault(require("./routes/librosRoutes/getLibrosRoutes"));
const eliminateLibrosRoutes_1 = __importDefault(require("./routes/librosRoutes/eliminateLibrosRoutes"));
const updateLibrosRoutes_1 = __importDefault(require("./routes/librosRoutes/updateLibrosRoutes"));
const createOrdenRoutes_1 = __importDefault(require("./routes/ordesRoutes/createOrdenRoutes"));
const getOrdenRoutes_1 = __importDefault(require("./routes/ordesRoutes/getOrdenRoutes"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// ✅ CORS configurado correctamente
app.use((0, cors_1.default)({
    origin: (origin, callback) => {
        callback(null, true); // permite cualquier origen
    },
    credentials: true,
}));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use("/api/registrar", registerRoutes_1.default);
app.use("/api/iniciarSesion", loginRoutes_1.default);
app.use("/api/cerrarSesion", logoutRoutes_1.default);
app.use("/api/carrito", addProductRoutes_1.default);
app.use("/api/carrito", eliminateProductRoutes_ts_1.default);
app.use("/api/carrito", getProductsRoutes_1.default);
//rutas para libros
app.use("/api/nuevo_libro", addLibrosRoutes_1.default);
app.use("/api/mostrar", getLibrosRoutes_1.default);
app.use("/api/eliminar", eliminateLibrosRoutes_1.default);
app.use("/api/actualizar", updateLibrosRoutes_1.default);
//rutas para las ordenes
app.use("/api/ordenes", createOrdenRoutes_1.default);
app.use("/api/ordenes", getOrdenRoutes_1.default);
app.listen(PORT, () => {
    console.log(`✅ Servidor corriendo en el puerto ${PORT}`);
});
