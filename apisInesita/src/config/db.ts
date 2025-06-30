import mysql from "mysql2/promise"
import dotenv from "dotenv"

dotenv.config()
//crear la conecion a la base datos
const coneccion = mysql.createPool({
    "host": process.env.HOST,
    "user": process.env.USER,
    "password": process.env.PASSWORD,
    "database": process.env.DATA_BASE,
    multipleStatements:true
})

export default coneccion