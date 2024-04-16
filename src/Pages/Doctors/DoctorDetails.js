import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../../Components/Navbar/Index'
export default function DoctorDetails() {
    const data = useSelector((state)=>state.doctor)
  return (
    <>
      <Navbar />
      {data.doctor.name}
    </>
  )
}
