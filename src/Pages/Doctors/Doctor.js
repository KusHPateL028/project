import React from "react";
import Navbar from "../../Components/Navbar/Index";
import Footer from "../../Components/Footer/Footer";
import DoctorCard from "./DoctorCard";
import doctorData from "../../Data/DoctorData/DoctorData";
import { Container, Grid , Stack } from "@mui/material";

export default function Doctor() {
  const data = doctorData;
  return (
    <>
      <Navbar />
      <Stack  style={{
            background: "rgb(9,51,121)",
            background:
              "linear-gradient(45deg, rgba(64,155,216,1) 0%, rgba(101,19,143,0.1) 80%)",
          }}>
        <Container>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            padding={"0 auto"}
            style={{ margin: "20px auto" }}>
            {data.map((doctor) => (
              <Grid item xs={2} sm={4} md={4} key={doctor.id}>
                <DoctorCard data={doctor} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Stack>
      <Footer />
    </>
  );
}
