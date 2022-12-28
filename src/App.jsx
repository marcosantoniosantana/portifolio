import { useState, lazy } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Home from './Home/index'

//const Header = lazy(()=> import("./components/Header"))

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
  )
}

export default App
