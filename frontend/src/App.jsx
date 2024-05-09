import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CreateAnime from './pages/CreateAnime'
import ShowAnime from './pages/ShowAnime'
import EditAnime from './pages/EditAnime'
import DeleteAnime from './pages/DeleteAnime'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/animes/create' element={<CreateAnime />} />
      <Route path='/animes/details/:id' element={<ShowAnime />} />
      <Route path='/animes/edit/:id' element={<EditAnime />} />
      <Route path='/animes/delete/:id' element={<DeleteAnime />} />
    </Routes>
  )
}

export default App
