import express from "express";
import { updateLibrosControllers } from "../../controllers/librosControllers/updateLibrosControllers"
import { verifyToken } from "../../middlewares/verifytoken"
import { isAdmin } from "../../middlewares/isAdmin"
import { getLibroById } from "../../models/librosModels/updateLibrosModels";

const router = express.Router();

// Ruta con el ID del libro a actualizar
router.put('/:id_libro', verifyToken, isAdmin, getLibroById, updateLibrosControllers);

export default router; 


// This code defines a route for updating book details in an Express application.
// It uses the PUT method to handle requests at the root path ('/') of the `lib