import { Stack, Typography } from "@mui/material"
import React, { useState } from "react"
import Input from "../../Components/Input/Index"
import Button from "../../Components/Button/Index"
import RadioButton from "../../Components/RadioButton/Index"
import { PersonOutline as PersonOutlineIcon, MailOutline, PhoneInTalk, Cake , GroupAdd, School } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faVenusMars } from "@fortawesome/free-solid-svg-icons";
import LoginData from '../../Data/LoginData/LoginData';
import SocialMedia from '../../Layout/SocialMedia/Index'


export default function Index() {
    const data = LoginData
    const currentDate = new Date().toISOString().split('T')[0];

    const [error, setErr] = useState({})
    const [inputValue, setInputValue] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        phoneNo: "",
        gender: "",
        dob: "",
        specialization: "",
        experience: "",
        degree: "",
        password: "",
        confirmPassword: '',
        age: "",
    })

    const calculateAge = (dob) => {
        const today = new Date();
        const birthDate = new Date(dob);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }


    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputValue((prevData) => ({ ...prevData, [name]: value }))
    }

    const validateData = () => {
        const err = {}
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;

        if (Object.entries(inputValue).some(([key, value]) => value.trim() === '')) {
            Object.keys(inputValue).forEach(key => {
                err[key] = `Enter ${key[0].toUpperCase()+key.slice(1)}`;
            });
        }

        if (!emailRegex.test(inputValue.email) ) {
            err.email = "Enter valid E-mail address"
        }
        if (!phoneRegex.test(inputValue.phoneNo)) {
            err.phoneNo = "Enter Valid Phone number"
        }   
        if (inputValue.password !== inputValue.confirmPassword) {
            err.password = "Password does not match"
        }
        return err;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const err = validateData();
        if (Object.keys(err).length === 0) {
            data.push(inputValue)
        } else {
            setErr(err);
        }
    }

    const gender = ["Male", "Female", "Other"];

    return (

        <Stack spacing={3} alignItems={"center"} padding="0px 40px" component="form" onSubmit={handleSubmit}>

            <Typography variant="h4" color="#0056FB">Create Account</Typography>
            <Stack spacing={3} >
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
                        // required="true"
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
                    <Input component="input"
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
                            max: currentDate
                        }}
                        sx={{ width: "100%" }}
                        value={inputValue.dob}
                        onChange={(e) => {
                            const age = calculateAge(e.target.value);
                            setInputValue((prevData) => ({ ...prevData, age: age }));
                            handleChange(e);
                        }}
                    />
                </Stack>
                <Stack direction={"row"} height={"50px"}>
                    <FontAwesomeIcon icon={faVenusMars} size="lg" style={{ marginTop: "15px" }} />
                    <RadioButton
                        array={gender}
                        direction="row"
                        row="true"
                        name="gender"
                        value={inputValue.gender}
                        onChange={handleChange}
                    />
                </Stack>
                <Stack direction="row" spacing={3} width={"100%"} >
                    <Stack direction="row" spacing={2} height={"50px"} width={"40%"} >
                        <GroupAdd style={{ marginTop: "8px" }} />
                        <Input component="input"
                            label="Experience"
                            name="experience"
                            type="number"
                            size="small"
                            value={inputValue.experience}
                            onChange={handleChange}
                            err={Boolean(error.experience)}
                            helperText={error.experience}
                            sx={{ width: "100%" }}
                        />
                    </Stack>
                    <Stack direction="row" spacing={2} height={"50px"} width={"55%"}>
                        <FontAwesomeIcon icon={faBuilding} size="lg" style={{ marginTop: "8px" }} />
                        <Input component="input"
                            label="Specialization"
                            name="specialization"
                            type="text"
                            size="small"
                            value={inputValue.specialization}
                            onChange={handleChange}
                            err={Boolean(error.specialization)}
                            helperText={error.specialization}
                            sx={{ width: "100%" }}
                        />
                    </Stack>
                </Stack>
                <Stack direction="row" spacing={2} height={"50px"} >
                    <School size="lg" style={{ marginTop: "8px" }} />
                    <Input component="input"
                        label="Degree"
                        name="degree"
                        type="file"
                        size="small"
                        value={inputValue.degree}
                        onChange={handleChange}
                        err={Boolean(error.degree)}
                        helperText={error.degree}
                        sx={{ width: "100%" }}
                    />
                </Stack>
                <Stack alignItems={"center"} style={{ marginTop: "25px" }}>
                    <Button
                        width="50%"
                        variant="contained"
                        type="submit"
                        text="Create Account"
                    />
                </Stack>
            </Stack>
            <SocialMedia sx={{marginTop:"25px"}}/>
        </Stack>

    )
}