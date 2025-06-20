"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const addProductRoutes_1 = __importDefault(require("./routes/addProductRoutes"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
//permitir el las peticiones desde otros domminios
app.use((0, cors_1.default)({
    origin: (origin, callback) => {
        callback(null, true);
    },
    credentials: true,
}));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use("/api/carrito", addProductRoutes_1.default);
app.listen(PORT, () => {
    console.log("servidor corriendo en el puerto", PORT);
});
