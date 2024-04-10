import { Stack, Typography } from '@mui/material'
import logo from '../../Assets/Images/logos/logo.png'
import signIn from '../../Assets/Images/Signin/signin.svg'
import React from 'react'

export default function Index(props) {

    return (

        <Stack style={{
            minHeight: '100vh',
            background: 'rgb(9,51,121)',
            background: 'linear-gradient(315deg, rgba(64,155,216,1) 0%, rgba(101,19,143,0.1) 75%)'
        }}>
            <Stack width="30%" margin="20px auto" alignItems="center">
                <Stack direction="row" spacing={2} marginBottom="20px" alignItems="center">
                    <Stack component="img" src={logo} width="100px" margin="auto 0" />
                    <Stack direction="row">
                        <Typography variant="h4" color="#409bd8">HEALTH</Typography>
                        <Typography variant="h4" color="#65138f">CARE</Typography>
                    </Stack>
                </Stack>
                <Stack direction="row" border="2px solid #ded2d2" backgroundColor="white" borderRadius="7px" width={props.width}>
                    <Stack width={"50%"} height={props.height}>
                        <Stack component="img" src={signIn} height="100%" style={{ objectFit: "cover" }} />
                    </Stack>
                    {props.children}
                </Stack>
            </Stack>
        </Stack >
    )
}
