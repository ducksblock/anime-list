import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import animeRoute from './routes/animeRoute.js'
import cors from 'cors'

dotenv.config()

const app = express()

// Middleware for parsing body
app.use(express.json())

app.use(cors())
// Middleware for CORS policy
// app.use(
//     cors({
//         origin: 'localhost:3000',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type']
//     })
// )

const port = process.env.PORT

app.get('/', (request, response) => {
    console.log(request)
    return response.status(200).send('Hello world!')
})

app.use('/animes', animeRoute)

mongoose
    .connect(process.env.DB_URL)
    .then(() => {
        console.log('Connected to the database')
        app.listen(port, () => {
            console.log(`Server listening to ${port}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })