import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route index path='/:id' element={<Details/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp
