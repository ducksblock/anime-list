import mongoose from "mongoose";

const animeSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        genre: {
            type: String,
            required: true,
        },
        releaseYear: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
)

export const Anime = mongoose.model('Cat', animeSchema)