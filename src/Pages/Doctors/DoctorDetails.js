import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../../Components/Navbar/Index";
import { Stack, Avatar, Typography, Box, Container } from "@mui/material";

export default function DoctorDetails() {
  const data = useSelector((state) => state.doctor);
  const doctor = data.doctor;
  console.log(doctor);
  return (
    <>
      <Navbar />
      <Stack
        direction={"row"}
        minHeight={"100vh"}
        py={5}
        spacing={2}
        style={{
          background: "rgb(9,51,121)",
          background:
            "linear-gradient(315deg, rgba(64,155,216,1) 0%, rgba(101,19,143,0.1) 80%)",
        }}>
        <Stack component={Container} spacing={2}>
          <Avatar
            src={doctor.image_url}
            variant="square"
            sx={{ width: "400px", height: "400px" }}
          />
          <Stack>
            <Typography variant="h4" color={"#409bd8"}>
              {doctor.name}
            </Typography>
            <span style={{ color: "#65138f", fontSize: "16px" }}>
              ({doctor.qualification})
            </span>
          </Stack>
        </Stack>
        <Stack alignItems={"center"} spacing={2}>
          
        </Stack>
      </Stack>
    </>
  );
}
