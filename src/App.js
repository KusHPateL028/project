import React from "react";
import Signin from "./Pages/Signin/Index";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SetUsername from "./Pages/Signin/SetUsername";
import Doctor from "./Pages/Doctors/Doctor";
import DoctorDetails from "./Pages/Doctors/DoctorDetails";
import {Link} from '@material-ui/core'

export default function App() {
  return (
    <Router>
        <Routes>
            <Route
                exact path="/"
                element={<Home />}
            />
            <Route
                exact path="/home"
                element={<Home />}
            />
            <Route
                exact path="/doctors"
                element={<Doctor />}
            />
            <Route
                exact path="/doctors/:doctorId"
                element={<DoctorDetails />}
            />
            <Route
                exact path="/login"
                element={<Login />}
            />
            <Route
                exact path="/signin"
                element={<Signin />}
            />
            <Route
                exact path="/setUserName"
                element={<SetUsername />}
            />
            <Route
                exact path="*"
                element={<div>Not Found</div>}
            />
        </Routes>
    </Router>
  );
}
