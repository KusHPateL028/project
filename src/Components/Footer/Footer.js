import { Stack, Typography, Link, Container } from '@mui/material'
import React from 'react'
import logo from '../../Assets/Images/logos/logo.png'
import { Facebook as FacebookIcon, Instagram as InstagramIcon, X } from '@mui/icons-material';
import '@fontsource/lato/300.css';


export default function Footer() {
    return (
        <Stack>
            <Stack backgroundColor="#d4e1e9" direction={"row"} spacing={15} justifyContent={"center"} py={7}>
                <Stack spacing={3} width={"30%"} pl={7}>
                    <Stack direction={"row"} alignItems={"center"} spacing={2}>
                        <Stack component={"img"} src={logo} width="60px" />
                        <Stack direction={"row"}>
                            <Typography variant='h4' color="#409BD8">HEALTH</Typography>
                            <Typography variant='h4' color="#65138F">CARE</Typography>
                        </Stack>
                    </Stack>
                    <Typography variant="h6" style={{opacity:"0.5"}}>"Medicines can cure diseases, but only doctors can cure patients."</Typography>
                    <Stack spacing={2}>
                        <Typography variant='h5' fontWeight={"bold"} color="#409BD8">Follow Us</Typography>
                        <Stack direction="row" spacing={5}>
                            <FacebookIcon fontSize="large" />
                            <InstagramIcon fontSize="large" />
                            <X fontSize="large" />
                        </Stack>
                    </Stack>
                </Stack>
                <Stack spacing={4}>
                    <Typography variant='h5' color={"#65138F"} fontWeight={"bold"}>Department</Typography>
                    <Stack spacing={2} color={"#409BD8"} >
                        <Typography>Surgery</Typography>
                        <Typography>Women's Health</Typography>
                        <Typography>Radiology</Typography>
                        <Typography>Cardioc</Typography>
                        <Typography>Medicine</Typography>
                    </Stack>
                </Stack>
                <Stack spacing={4} width={"13%"} >
                    <Typography variant='h5' color={"#65138F"} fontWeight={"bold"}>Support</Typography>
                    <Stack spacing={2} color={"#409BD8"}>
                        <Typography>Terms & Conditions</Typography>
                        <Typography>Privacy Policy</Typography>
                        <Typography>Company Support</Typography>
                        <Typography>FA Questions</Typography>
                        <Typography>Company Licence</Typography>
                    </Stack>
                </Stack>
                <Stack spacing={4}>
                    <Typography variant='h5' color={"#65138F"} fontWeight={"bold"}>Contact</Typography>
                    <Stack spacing={2}>
                        <Link href="tel:9898532307" style={{ textDecoration: "none" }} color={"#409BD8"}>
                            <Typography>+919898535307</Typography>
                        </Link>
                        <Link href="mailto:kushpatel0028@gmail.com" color={"#409BD8"} style={{ textDecoration: "none" }}>
                            <Typography>healthcare@gmail.com</Typography>
                        </Link>
                        <Link href="https://maps.app.goo.gl/d2bCx7ywMjJukukPA" color={"#409BD8"} style={{ textDecoration: "none" }}>
                            <Typography>DRC System , GIFT city , Gandhinagar</Typography>
                        </Link>
                    </Stack>
                </Stack>
            </Stack>
            <Stack alignItems={"center"} >
                <Typography variant="h6" fontFamily={"Lato,sans-serif"}>&copy; copyright 2024 HEALTHCARE | All rights reserved</Typography>
            </Stack>
        </Stack>
    )
}
