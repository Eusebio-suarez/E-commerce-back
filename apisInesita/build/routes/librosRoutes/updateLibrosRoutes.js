"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const updateLibrosControllers_1 = require("../../controllers/librosControllers/updateLibrosControllers");
const verifytoken_1 = require("../../middlewares/verifytoken");
const isAdmin_1 = require("../../middlewares/isAdmin");
const updateLibrosModels_1 = require("../../models/librosModels/updateLibrosModels");
const router = express_1.default.Router();
// Ruta con el ID del libro a actualizar
router.put('/:id_libro', verifytoken_1.verifyToken, isAdmin_1.isAdmin, updateLibrosModels_1.getLibroById, updateLibrosControllers_1.updateLibrosControllers);
exports.default = router;
// This code defines a route for updating book details in an Express application.
// It uses the PUT method to handle requests at the root path ('/') of the `lib
