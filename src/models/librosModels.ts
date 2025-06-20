import conecion from './db'; // o '../db' si está en otro directorio

export async function getLibros() {
  const [rows] = await conecion.query('SELECT * FROM libros');
  return rows;
}
