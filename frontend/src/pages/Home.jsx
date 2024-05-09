import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Spinner from '../components/Spinner'
import { BsInfoCircle } from 'react-icons/bs'
import { AiOutlineEdit } from 'react-icons/ai'
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'

const Home = () => {
  const [animes, setAnimes] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await axios.get('http://localhost:5555/animes')
        setAnimes(response.data.data)
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
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl my-11'>Anime List</h1>
        <Link to='/animes/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <table className='w-full'>
          <thead>
            <tr>
              <th className='border border-slate-600'>Sr.</th>
              <th className='border border-slate-600'>Name</th>
              <th className='border border-slate-600'>Genre</th>
              <th className='border border-slate-600'>Release Year</th>
              <th className='border border-slate-600'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {animes.map((anime, index) => (
              <tr key={anime._id} className=''>
                <td className='border border-slate-600 text-center'>
                  {index + 1}
                </td>
                <td className='border border-slate-600 text-center'>
                  {anime.name}
                </td>
                <td className='border border-slate-600 text-center'>
                  {anime.genre}
                </td>
                <td className='border border-slate-600 text-center'>
                  {anime.releaseYear}
                </td>
                <td className='border border-slate-600 text-center'>
                  <div className='cursor-pointer flex justify-center gap-x-4'>
                    <Link to={`/animes/details/${anime._id}`}>
                      <BsInfoCircle className='text-yellow-700' />
                    </Link>
                    <Link to={`/animes/edit/${anime._id}`}>
                      <AiOutlineEdit className='text-green-700' />
                    </Link>
                    <Link to={`/animes/delete/${anime._id}`}>
                      <MdOutlineDelete className='text-rose-700' />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Home
