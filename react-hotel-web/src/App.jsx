import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'


import Nav from './assets/Components/Navbar/Nav'
import Home from './assets/Pages/Home/Home'


const App = () => {
  return (

    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/home" element={<Home />} />

        </Routes>
      </Router>

    </div>



  )
}

export default App
