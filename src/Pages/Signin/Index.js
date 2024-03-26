import { Stack, Typography } from "@mui/material"
import React, { useState } from "react"
import Input from "../../Components/Input/Index"
import Button from "../../Components/Button/Index"
import RadioButton from "../../Components/RadioButton/Index"
import Password from "../../Components/Password/Index"
import Layout from "../../Layout/Signin/Index"
import { Link } from "react-router-dom"
import { PersonOutline as PersonOutlineIcon, MailOutline, PhoneInTalk, Cake, Google, FacebookRounded, X } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVenusMars } from "@fortawesome/free-solid-svg-icons";
import { useGoogleLogin } from '@react-oauth/google';
import { LoginSocialFacebook, LoginSocialTwitter } from "reactjs-social-login";
import TwitterLogin from "react-twitter-login";

export default function Index() {
    const currentDate = new Date().toISOString().split('T')[0];

    const [inputValue, setInputValue] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        phoneNo: "",
        gender: "",
        dob: "",
        password: "",
        confirmPassword: ""
    })

    const [error, setErr] = useState({})

    const [alert, setAlert] = useState(false)

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputValue((prevData) => ({ ...prevData, [name]: value }))
    }

    const validateData = () => {
        const err = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regex.test(inputValue.email)) {
            err.email = "Invalid email address"
        }
        if (inputValue.firstName === "") {
            err.firstName = "Enter Name"
        }
        if (inputValue.password === inputValue.confirmPassword) {
            err.password = "Password does not match"
        }
        return err;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const err = validateData();
        if (Object.keys(err).length === 0) {
            setAlert(true)
            setErr(err)
        } else {
            setErr(err);
        }
    }

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
    const data = (<Stack spacing={3} alignItems={"center"} padding="40px 55px" width="50%">

        <Typography variant="h4" color="#0056FB">Create Account</Typography>
        <form onSubmit={handleSubmit}>
            <Stack spacing={3} >
                <Stack direction="row" alignItems="center" spacing={2} >
                    <PersonOutlineIcon />
                    <Input
                        // required="true"
                        label="First Name*"
                        name="firstName"
                        type="text"
                        size="small"
                        value={inputValue.firstName}
                        onChange={handleChange}
                        err={Boolean(error.firstName)}
                        helperText={error.firstName}
                    ></Input>
                    <Input
                        label="Middle Name"
                        name="middleName"
                        type="text"
                        size="small"
                    />
                    <Input
                        // required="true"
                        label="Last Name*"
                        name="lastName"
                        type="text"
                        size="small"
                        value={inputValue.lastName}
                        onChange={handleChange}
                        err={Boolean(error.lastName)}
                        helperText={error.lastName}
                    ></Input>
                </Stack>
                <Stack direction={"row"} alignItems={"center"} spacing={2} >
                    <MailOutline />
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
                <Stack direction="row" alignItems={"center"} spacing={2}>
                    <PhoneInTalk />
                    <Input component="input"
                        label="Phone No."
                        name="phoneNo"
                        type="text"
                        size="small"
                        value={inputValue.phoneNo}
                        onChange={handleChange}
                        sx={{ width: "100%" }}
                    />
                </Stack>
                <Stack direction={"row"} alignItems="center" spacing={2}>
                    <Cake />
                    <Input
                        type="date"
                        size="small"
                        InputProps={{
                            max: currentDate
                        }}
                        sx={{ width: "100%" }}
                    />
                </Stack>
                <Stack direction={"row"} alignItems={"center"}>
                    <FontAwesomeIcon icon={faVenusMars} size="lg" />
                    <RadioButton
                        array={gender}
                        direction="row"
                        row="true"
                    />
                </Stack>
                <Password
                    label="Password"
                    size="small"
                    sx={{ width: "100%" }}
                    alignItems="center"
                    value={inputValue.password}
                    onChange={handleChange}
                // err={Boolean(error.password)}
                // helperText={error.passsword}
                />
                <Password
                    label="Confirm Password"
                    size="small"
                    sx={{ width: "100%" }}
                    alignItems="center"
                    value={inputValue.confirmPassword}
                    onChange={handleChange}
                    err={Boolean(error.password)}
                    helperText={error.passsword}
                />
                <Stack alignItems={"center"} style={{ marginTop: "50px" }}>
                    <Button
                        width="40%"
                        variant="contained"
                        type="submit"
                        text="Create Account"
                    />
                </Stack>
            </Stack>
        </form>
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
                <TwitterLogin
                    authCallbackUrl="http://localhost:3001/"
                    authCallback={handleTwitterLoginSuccess}
                    consumerKey="qcCfighvdUhAwaiFPWq7Yq64r"
                    consumerSecret="bwff8d2rooUegKqSP8MHqDnMUhUuXiQUosZNXgSTFQHQ8HG02D"
                    onSuccess={handleTwitterLoginSuccess}
                    onFailure={handleTwitterLoginFailure}
                />
                {/* <TwitterLogin
                    authCallback={authHandler}
                    consumerKey="qcCfighvdUhAwaiFPWq7Yq64r"
                    consumerSecret="bwff8d2rooUegKqSP8MHqDnMUhUuXiQUosZNXgSTFQHQ8HG02D"
                /> */}
            </Stack>
        </Stack>
        <Stack spacing={4} alignItems="center" style={{ width: "100%", marginTop: "80px" }}>
            <Typography variant="body1">--------------------Already have an account--------------------</Typography>

            <Link to="/" style={{ width: "50%" }}>
                <Button
                    variant="outlined"
                    text="Log In"
                    width="100%"
                />
            </Link>
        </Stack>
    </Stack>)

    return (
        <Layout data={data} height="1000px" width="1100px" />
    )
}