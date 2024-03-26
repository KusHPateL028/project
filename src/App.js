import React from 'react'
import Signin from './Pages/Signin/Index'
import Login from './Pages/Login/Index'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

export default function App() {
    return (
        <Router>
            <Routes>
                <Route
                    exact path="/"
                    element={<Login />}
                />
                <Route
                    exact path="/signin"
                    element={<Signin />}
                />
            </Routes>
        </Router>
    )
}
