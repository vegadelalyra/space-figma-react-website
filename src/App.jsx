import React from 'react'
import Home from './pages/Home'
import Crew from './pages/Crew'
import Destination from './pages/Destination'
import Technology from './pages/Technology'
import Nav from './Nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './style.sass'

const App = () => {
    return (
        <Router>
            <div className='container'>
                <Nav />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/crew' element={<Crew />} />
                    <Route path='/destination' element={<Destination />} />
                    <Route path='/technology' element={<Technology />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
