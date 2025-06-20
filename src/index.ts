import express from 'express'
import librosRouter from './routes/libros'

const app = express()

app.use(express.json())


const PORT = 3000

app.get('/ping', (_req, res) => {
    console.log('cargando libros')
    res.send('pong')
})

app.use('/api/libros', librosRouter)

app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`)
})