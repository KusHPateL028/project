import React from 'react'
import Navbar from '../../Components/Navbar/Index'
import Banner from '../../Components/Banner/Index'
import { useAuth } from '../../Context/AuthContext'
import Footer from '../../Components/Footer/Footer';

export default function Home() {
  
  return (
    <>
      <Navbar/>
      <Banner />
      <Footer/>
    </>
  )
}
