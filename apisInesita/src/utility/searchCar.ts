import coneccion from "../config/db";

export const searchCar = async(userId:number)=>{
    const [carrito] = await coneccion.query("SELECT id FROM carrito WHERE user_id = ?",userId);
    
    // Verifica si se encontró un carrito
    if ((carrito as any[]).length === 0) {
        return null;
    }
    
    // Devuelve el id del carrito
    return (carrito as any)[0].id;
}