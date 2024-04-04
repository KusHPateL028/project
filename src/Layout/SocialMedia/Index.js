import React from 'react'
import { Stack, Typography } from '@mui/material'
import { useGoogleLogin } from '@react-oauth/google';
import { LoginSocialFacebook, LoginSocialTwitter } from "reactjs-social-login";
import { Google, FacebookRounded, X } from "@mui/icons-material";
import { Link } from "react-router-dom"
import Button from "../../Components/Button/Index"

export default function Index(props) {
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
    return (
        <Stack direction="column" spacing={3} alignItems={"center"} style={props.sx}>
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
                <X />
            </Stack>
            <Stack spacing={4} alignItems="center" style={{ width: "100%", marginTop: "40px" }}>
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