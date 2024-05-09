import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'

const BackButton = () => {
  return (
    <div className='flex'>
      <Link
        to={'/'}
        className='text-white bg-sky-600 px-4 py-1 rounded-lg w-fit'
      >
        <IoIosArrowBack className='text-xl' />
      </Link>
    </div>
  )
}

export default BackButton
