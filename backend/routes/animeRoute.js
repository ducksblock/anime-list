import express from 'express'
import { Anime } from '../models/animeModel.js'

const router = express.Router()

// GET all request
router.get('/', async (request, response) => {
    try {

        const anime = await Anime.find({})

        return response.status(200).json({
            count: anime.length,
            data: anime
        })

    } catch (error) {
        console.log('Error: ', error)
        response.status(500).send({ message: error.message })
    }
})

// GET id request
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params

        const anime = await Anime.findById(id)
        return response.status(200).json({
            count: anime.length,
            data: anime
        })
    } catch (error) {
        console.log('Error', error)
        response.status(500).send({ message: error.message })
    }
})

// POST request
router.post('/', async (request, response) => {
    try {
        if (
            !request.body.name ||
            !request.body.genre ||
            !request.body.releaseYear
        ) {
            return response.status(400).send({
                message: 'Required fields missing'
            })
        }
        const newAnime = {
            name: request.body.name,
            genre: request.body.genre,
            releaseYear: request.body.releaseYear
        }

        const anime = await Anime.create(newAnime)

        return response.status(201).send(anime)

    } catch (error) {
        console.log('Error: ', error)
        response.status(500).send({ message: error.message })
    }
})

// PUT request
router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.name ||
            !request.body.genre ||
            !request.body.releaseYear
        ) {
            return response.status(400).send({
                message: 'Required fields missing'
            })
        }

        const { id } = request.params

        const result = await Anime.findByIdAndUpdate(id, request.body)

        if (!result) {
            return response.status(404).json({ message: 'Anime not found' })
        }

        return response.status(200).send({ message: 'Anime updated successfully' })
    } catch (error) {
        console.log('Error: ', error)
        response.status(500).send({ message: error.message })
    }
})

// DELETE request
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params
        const result = await Anime.findByIdAndDelete(id)

        if (!result) {
            return response.status(404).json({ message: 'Anime not found' })
        }

        return response.status(200).send({ message: 'Anime deleted successfully' })
    } catch (error) {
        console.log('Error', error)
        response.status(500).send({ message: error.message })
    }
})

export default router