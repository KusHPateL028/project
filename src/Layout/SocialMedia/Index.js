import React from 'react'
import { Stack, Typography } from '@mui/material'
import { useGoogleLogin } from '@react-oauth/google';
import { LoginSocialFacebook } from "reactjs-social-login";
import { Google, FacebookRounded, X } from "@mui/icons-material";
import { Link } from "react-router-dom"
import Button from "../../Components/Button/Index"
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext'

export default function Index(props) {
    const navigate = useNavigate();
    const { login, userData } = useAuth();
    const googleLogin = useGoogleLogin({
        onSuccess: tokenResponse => {
            const accessToken = tokenResponse.access_token;
            fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
                .then(response => response.json())
                .then(data => {
                    navigate('/home');
                    userData(data)
                    login();
                })
                .catch(error => console.error('Error fetching user info:', error));
        }
    });

    return (
        <Stack direction="column" spacing={3} alignItems={"center"} style={props.sx} width={"100%"}>
            <Typography variant="body1">Or Sign Up Using</Typography>
            <Stack direction={"row"} spacing={4} alignItems={"center"} justifyContent={"center"}>
                <Google
                    onClick={() => googleLogin()}
                    fontSize="large"
                    cursor="pointer"
                    border={"1px solid red"}
                    style={{ color: "#EA4335" }}
                />
                <LoginSocialFacebook
                    appId="2140906686308230"
                    onResolve={(tokenResponse) => {
                        navigate('/home');
                        userData(tokenResponse.data)
                        login();
                    }}
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
                <X />
            </Stack>
            <Stack spacing={4} alignItems="center" style={{marginTop: "40px" }} width={"100%"}>
                <Stack direction={"row"} width={"100%"} justifyContent={"center"}>
                    <Stack borderTop={'2px solid black'} margin='auto 10px' width={"20%"}></Stack>
                    <Typography variant="span">Already have an account</Typography>
                    <Stack borderTop={'2px solid black'} margin='auto 10px' width={"20%"}></Stack>
                </Stack>

                <Link to="/login" style={{ width: "50%" }}>
                    <Button
                        variant="outlined"
                        text="Log In"
                        sx={{ width: "100%" }}
                    />
                </Link>
            </Stack>
        </Stack>
    )
}
