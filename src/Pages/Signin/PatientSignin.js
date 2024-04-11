import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Input from "../../Components/Input/Index";
import RadioButton from "../../Components/RadioButton/Index";
import Button from "../../Components/Button/Index";
import {
  PersonOutline as PersonOutlineIcon,
  MailOutline,
  PhoneInTalk,
  Cake,
  ConnectingAirportsOutlined,
} from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVenusMars } from "@fortawesome/free-solid-svg-icons";
import LoginData from "../../Data/LoginData/LoginData";
import SocialMedia from "../../Layout/SocialMedia/Index";
import { useNavigate } from "react-router-dom";

export default function Index(props) {
  const data = LoginData;
  const navigate = useNavigate();
  const currentDate = new Date().toISOString().split("T")[0];

  const [error, setErr] = useState({});
  const [inputValue, setInputValue] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    gender: "",
    dob: "",
    password: "",
    confirmPassword: "",
    age: "",
  });

  const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValue((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateData = () => {
    const err = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (
      Object.entries(inputValue).every(([key, value]) => value.trim() === "")
    ) {
      Object.keys(inputValue).forEach((key) => {
        err[key] = `Enter ${key[0].toUpperCase() + key.slice(1)}`;
      });
    }

    if (!emailRegex.test(inputValue.email)) {
      err.email = "Enter valid E-mail address";
    }
    if (!phoneRegex.test(inputValue.phoneNo)) {
      err.phoneNo = "Enter Valid Phone number";
    }
    if (inputValue.password !== inputValue.confirmPassword) {
      err.password = "Password does not match";
    }
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const err = validateData();
    if (Object.keys(err).length === 0) {
      navigate("/setUserName");
    } else {
      setErr(err);
    }
  };

  const gender = ["Male", "Female", "Other"];

  return (
    <Stack
      spacing={3}
      alignItems={"center"}
      padding="0px 40px"
      component="form"
      onSubmit={handleSubmit}
    >
      <Typography variant="h4" color="#0056FB">
        Create Account
      </Typography>
      <Stack spacing={3}>
        <Stack direction="row" spacing={2} height={"50px"}>
          <PersonOutlineIcon style={{ marginTop: "10px" }} />
          <Input
            label="First Name"
            name="firstName"
            type="text"
            size="small"
            value={inputValue.firstName}
            onChange={handleChange}
            err={Boolean(error.firstName)}
            helperText={error.firstName}
            sx={{ width: "36%" }}
          ></Input>
          <Input
            label="Middle Name"
            name="middleName"
            type="text"
            size="small"
            value={inputValue.middleName}
            onChange={handleChange}
            sx={{ width: "28%" }}
          />
          <Input
            label="Last Name"
            name="lastName"
            type="text"
            size="small"
            value={inputValue.lastName}
            onChange={handleChange}
            err={Boolean(error.lastName)}
            helperText={error.lastName}
            sx={{ width: "36%" }}
          ></Input>
        </Stack>
        <Stack direction={"row"} spacing={2} height={"50px"}>
          <MailOutline style={{ marginTop: "10px" }} />
          <Input
            label="E-mail"
            name="email"
            type="email"
            size="small"
            value={inputValue.email}
            onChange={handleChange}
            err={Boolean(error.email)}
            helperText={error.email}
            sx={{ width: "100%" }}
          />
        </Stack>
        <Stack direction="row" spacing={2} height={"50px"}>
          <PhoneInTalk style={{ marginTop: "7px" }} />
          <Input
            component="input"
            label="Phone No."
            name="phoneNo"
            type="text"
            size="small"
            value={inputValue.phoneNo}
            onChange={handleChange}
            err={Boolean(error.phoneNo)}
            helperText={error.phoneNo}
            sx={{ width: "100%" }}
          />
        </Stack>
        <Stack direction={"row"} spacing={2} height={"50px"}>
          <Cake style={{ marginTop: "7px" }} />
          <Input
            label="Date of Birth"
            type="date"
            size="small"
            name="dob"
            InputProps={{
              max: currentDate,
            }}
            sx={{ width: "100%" }}
            value={inputValue.dob}
            onChange={(e) => {
              const age = calculateAge(e.target.value);
              setInputValue((prevData) => ({ ...prevData, age: age }));
              handleChange(e);
            }}
            err={Boolean(error.dob)}
            helperText={error.dob}
          />
        </Stack>
        <Stack direction={"row"} height={"50px"}>
          <FontAwesomeIcon
            icon={faVenusMars}
            size="lg"
            style={{ marginTop: "18px" }}
          />
          <RadioButton
            array={gender}
            direction="row"
            row="true"
            name="gender"
            value={inputValue.gender}
            onChange={handleChange}
            err={Boolean(error.gender)}
            helperText={error.gender}
          />
        </Stack>
        <Stack alignItems={"center"} style={{ margin: "30px 0" }}>
          <Button
            width="40%"
            type='submit'
            variant="contained"
            text="Create Account"
          />
        </Stack>
      </Stack>
      <SocialMedia sx={{ marginTop: "70px" }} />
    </Stack>
  );
}
