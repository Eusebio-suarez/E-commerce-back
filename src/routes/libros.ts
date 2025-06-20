import express from 'express'
import { Request, Response } from 'express'
import toNewLibrosEntry from '../../utils'



import * as librosSevices from '../services/librosServices'

const router = express.Router()

router.get('/', (_req, res) => {
    res.send(librosSevices.getEntries())
})

router.get('/:id_libro', (req: Request, res: Response) => {
    const libros = librosSevices.findById(+req.params.id_libro)

    libros != null ? res.send(libros)
    : res.sendStatus(404)
})

router.post('/', (req, res) => {
    try {
       const newLibrosEntry = toNewLibrosEntry(req.body)

        const addedLibrosEntry = librosSevices.addLibros(newLibrosEntry)


        res.json(addedLibrosEntry) 
    } catch (e: any) {
        res.status(400).send(e.message)
    }
})

export default router