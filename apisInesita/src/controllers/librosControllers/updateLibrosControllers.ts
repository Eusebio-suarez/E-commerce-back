import { AuthenticatedRequest } from "../../middlewares/verifytoken";
import { updateLibro } from "../../models/librosModels/updateLibrosModels";
import { Response } from "express";


export const updateLibrosControllers = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const id_libro = Number(req.params.id_libro);

    if (isNaN(id_libro)) {
      res.status(400).json({ mensaje: "ID de libro inválido" });
      return;
    }

    const {
      nombre_libro,
      precio,
      descripcion,
      stock,
      estado,
      foto,
    } = req.body;

    if (!nombre_libro ||precio === undefined ||!descripcion ||stock === undefined ||estado === undefined ||!foto) {
      res.status(400).json({ mensaje: "Faltan datos obligatorios" });
      return;
    }

    const actualizado = await updateLibro(
      id_libro,
      nombre_libro,
      precio,
      descripcion,
      stock,
      estado,
      foto
    );

    if (actualizado) {
      res.status(200).json({ mensaje: "Libro actualizado con éxito" });
    } else {
      res.status(404).json({ mensaje: "Libro no encontrado" });
    }
  } catch (error) {
    console.error("Error al actualizar libro:", error);
    res.status(500).json({ mensaje: "Error interno del servidor" });
  }
};
