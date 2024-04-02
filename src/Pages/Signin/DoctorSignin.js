import { Stack, Typography } from "@mui/material"
import React, { useState } from "react"
import Input from "../../Components/Input/Index"
import Button from "../../Components/Button/Index"
import RadioButton from "../../Components/RadioButton/Index"
import Password from "../../Components/Password/Index"
import { Link } from "react-router-dom"
import { PersonOutline as PersonOutlineIcon, MailOutline, PhoneInTalk, Cake, Google, FacebookRounded, X ,GroupAdd , School} from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding,  faVenusMars } from "@fortawesome/free-solid-svg-icons";
import { useGoogleLogin } from '@react-oauth/google';
import { LoginSocialFacebook, LoginSocialTwitter } from "reactjs-social-login";
import TwitterLogin from "react-twitter-login";
import LoginData from '../../Data/LoginData/LoginData';


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
        specialization:"",
        experience:"",
        degree:"",  
        password: "",
        confirmPassword: '',
        age:"",
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

    console.log(inputValue)

    const validateData = () => {
        const err = {}
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;

        if (!emailRegex.test(inputValue.email) || inputValue.email === "") {
            err.email = "Enter valid E-mail address"
        }
        if(inputValue.lastName===""){
            err.lastName="Enter Last Name"
        }
        if (inputValue.firstName === "") {
            err.firstName = "Enter Name"
        }
        if (inputValue.experience === "") {
            err.experience = "Enter Experience"
        }
        if (inputValue.specialization === "") {
            err.specialization = "Enter Specialization"
        }
        if (inputValue.degree === "") {
            err.degree = "Select Degree"
        }
        if(inputValue.phoneNo === "" || !phoneRegex.test(inputValue.phoneNo)){
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
            console.log("Login")
        } else {
            setErr(err);
        }
    }

    console.log(data)


    const login = useGoogleLogin({
        onSuccess: tokenResponse => {
            const accessToken = tokenResponse.access_token;

            fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error('Error fetching user info:', error));
        }
    });

    const handleTwitterLoginSuccess = (response) => {
        console.log(response);
        // Handle successful Twitter login
    };

    const handleTwitterLoginFailure = (error) => {
        console.error(error);
        // Handle failed Twitter login
    };


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
                        sx={{width:"36%"}}
                    ></Input>
                    <Input
                        label="Middle Name"
                        name="middleName"
                        type="text"
                        size="small"
                        value={inputValue.middleName}
                        onChange={handleChange}
                        sx={{width:"28%"}}
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
                        sx={{width:"36%"}}
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
                        <GroupAdd style={{ marginTop: "8px" }}/>
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
                    <School size="lg" style={{ marginTop: "8px" }}/>
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
                {/* <Password
                        label="Password"
                        name="password"
                        size="small"
                        sx={{ width: "100%" }}
                        alignItems="center"
                        value={inputValue.password}
                        onChange={handleChange}
                        err={Boolean(error.password)}
                        helperText={error.password}
                    />
                    <Password
                        label="Confirm Password"
                        name="confirmPassword"
                        size="small"
                        sx={{ width: "100%" }}
                        alignItems="center"
                        value={inputValue.confirmPassword}
                        onChange={handleChange}
                    /> */}
                <Stack alignItems={"center"} style={{ marginTop: "50px" }}>
                    <Button
                        width="50%"
                        variant="contained"
                        type="submit"
                        text="Create Account"
                    />
                </Stack>
            </Stack>
            <Stack direction="column" spacing={3} alignItems={"center"}>
                <Typography variant="body1">Or Sign Up Using</Typography>
                <Stack direction={"row"} spacing={4} alignItems={"center"} justifyContent={"center"}>
                    <Google
                        onClick={() => login()}
                        fontSize="large"
                        cursor="pointer"
                        border={"1px solid red"}
                        style={{ color: "#EA4335" }}
                    />
                    <LoginSocialFacebook
                        appId="2140906686308230"
                        onResolve={(tokenResponse) => console.log(tokenResponse)}
                        onReject={(error) => {
                            console.log(error);
                        }}
                    >
                        <FacebookRounded
                            fontSize="large"
                            cursor="pointer"
                            style={{ color: "#4267B2", marginTop: "3px" }}
                        />
                    </LoginSocialFacebook>
                    <X/>
                    {/* <TwitterLogin
                        authCallbackUrl="http://localhost:3001/"
                        authCallback={handleTwitterLoginSuccess}
                        consumerKey="qcCfighvdUhAwaiFPWq7Yq64r"
                        consumerSecret="bwff8d2rooUegKqSP8MHqDnMUhUuXiQUosZNXgSTFQHQ8HG02D"
                        onSuccess={handleTwitterLoginSuccess}
                        onFailure={handleTwitterLoginFailure}
                    /> */}
                    {/* <TwitterLogin
                        authCallback={authHandler}
                        consumerKey="qcCfighvdUhAwaiFPWq7Yq64r"
                        consumerSecret="bwff8d2rooUegKqSP8MHqDnMUhUuXiQUosZNXgSTFQHQ8HG02D"
                        /> */}
                </Stack>
            </Stack>
            <Stack spacing={4} alignItems="center" style={{ width: "100%", marginTop: "25px" }}>
                <Typography variant="body1">---------------Already have an account---------------</Typography>

                <Link to="/" style={{ width: "50%" }}>
                    <Button
                        variant="outlined"
                        text="Log In"
                        width="100%"
                    />
                </Link>
            </Stack>
        </Stack>

    )
}