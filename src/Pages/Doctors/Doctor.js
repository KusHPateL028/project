import React from 'react'
import Navbar from '../../Components/Navbar/Index'
import DoctorCard from './DoctorCard'
import doctorData from '../../Data/DoctorData/DoctorData'
import { Stack, Container, Grid, Item } from '@mui/material';

export default function Doctor() {
  const data = doctorData;
  return (
    <>
      <Navbar />
      <Container >
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} padding={"0 auto"} style={{ margin:"20px auto" }}>
          {data.map((doctor) => (
            <Grid item xs={2} sm={4} md={4} key={doctor.id}>
              <DoctorCard data={doctor} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}
