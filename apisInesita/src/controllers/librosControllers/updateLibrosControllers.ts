import { AuthenticatedRequest } from "../../middlewares/verifytoken";
import { updateLibro } from "../../models/librosModels/updateLibrosModels";
import { Response } from "express"


export const updateLibrosControllers = async (req: AuthenticatedRequest, res: Response)=>{

    try {
    const id_libro = Number(req.params.id_libro); // suponiendo que lo recibes como parte de la URL: /libros/:id_libro

    const {
      nombre_libro,
      precio,
      descripcion,
      stock,
      estado,
      foto
    } = req.body;

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
      res.status(200).json({ mensaje: 'Libro actualizado con éxito' });
    } else {
      res.status(404).json({ mensaje: 'Libro no encontrado' });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al actualizar el libro' });
  }
};