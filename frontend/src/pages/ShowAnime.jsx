import React, { useEffect, useState } from 'react'
import BackButton from '../components/BackButton'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Spinner from '../components/Spinner'

const ShowAnime = () => {
  const [anime, setAnime] = useState([])
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await axios.get(`http://localhost:5555/animes/${id}`)
        setAnime(response.data.data)
        console.log(response.data)
        setLoading(false)
      } catch (error) {
        console.log('Error fetching data: ', error)
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <div className='p-4'>
      <BackButton />
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl my-4'>Anime Details</h1>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border border-slate-600 rounded-xl w-fit p-4'>
          <div className='my-4'>
            <span className='font-semibold mr-4'>Name:</span>
            <span>{anime.name}</span>
          </div>
          <div className='my-4'>
            <span className='font-semibold mr-4'>Genre:</span>
            <span>{anime.genre}</span>
          </div>
          <div className='my-4'>
            <span className='font-semibold mr-4'>Release Year:</span>
            <span>{anime.releaseYear}</span>
          </div>
          <div className='my-4'>
            <span className='font-semibold mr-4'>Created At:</span>
            <span>{new Date(anime.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='font-semibold mr-4'>Updated At:</span>
            <span>{new Date(anime.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default ShowAnime
