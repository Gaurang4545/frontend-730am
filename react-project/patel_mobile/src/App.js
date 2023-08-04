import React from 'react'
import Navbar from './component/Navbar'
import Rout from './component/Rout'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Rout/>
    </BrowserRouter>
    </>
  )
}

export default App