import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'

const CreateAnime = () => {
  const [name, setName] = useState('')
  const [genre, setGenre] = useState('')
  const [releaseYear, setReleaseYear] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const handleSaveAnime = async () => {
    const data = {
      name,
      genre,
      releaseYear,
    }
    try {
      setLoading(true)
      await axios.post('http://localhost:5555/animes', data)
      setLoading(false)
      navigate('/')
    } catch (error) {
      setLoading(false)
      alert('An error occured! Please check the fields')
      console.log(error)
    }
  }

  return (
    <div className='p-4'>
      <BackButton />
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl my-4'>Create Anime</h1>
      </div>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border border-slate-600 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='font-semibold mr-4'>Name</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full rounded-sm'
          />
        </div>
        <div className='my-4'>
          <label className='font-semibold mr-4'>Genre</label>
          <input
            type='text'
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full rounded-sm'
          />
        </div>
        <div className='my-4'>
          <label className='font-semibold mr-4'>Release Year</label>
          <input
            type='number'
            value={releaseYear}
            onChange={(e) => setReleaseYear(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full rounded-sm'
          />
        </div>
        <button
          className='bg-blue-400 my-4 p-4 rounded-lg text-lg font-semibold text-white'
          onClick={handleSaveAnime}
        >
          Save
        </button>
      </div>
    </div>
  )
}

export default CreateAnime
