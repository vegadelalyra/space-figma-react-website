import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/layout/layout'
import Home from '../pages/home/Home'
import Tech from '../pages/tech/Tech'
import Crew from '../pages/crew/Crew'
import Destiny from '../pages/destiny/Destiny'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={<Layout />}>
                    <Route
                        index
                        element={<Home />}
                    />
                    <Route
                        path='tech'
                        element={<Tech />}
                    />
                    <Route
                        path='crew'
                        element={<Crew />}
                    /> 
                    <Route
                        path='destiny'
                        element={<Destiny />}
                    /> 
                </Route>
            </Routes>
        </BrowserRouter >
    )
}

export default AppRouter
