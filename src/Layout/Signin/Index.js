import { Stack, Typography } from '@mui/material'
import logo from '../../assets/Images/logos/logo.png'
import signIn from '../../assets/Images/Signin/signin.svg'
import React, { useState } from 'react'

export default function Index(props) {
    const [inputValue, setInputValue] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        phoneNo: '',
        gender: '',
        dob: '',
        password: '',
        confirmPassword: ''
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
            err.email = 'Invalid email address'
        }
        if (inputValue.firstName === "") {
            err.firstName = 'Enter Name'
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

    const gender = ['Male', 'Female', 'Other'];

    return (

        <Stack style={{
            minHeight:'100vh',
            background: 'rgb(9,51,121)',
            background: 'linear-gradient(315deg, rgba(64,155,216,1) 0%, rgba(101,19,143,0.1) 75%)'
        }}>
            <Stack width="30%" margin="30px auto" alignItems="center">
                <Stack direction="row" spacing={2} marginBottom="30px" alignItems="center">
                    <Stack component="img" src={logo} width="100px"  margin="auto 0" />
                    <Stack direction="row">
                        <Typography variant="h4" color="#409bd8">HEALTH</Typography>
                        <Typography variant="h4" color="#65138f">CARE</Typography>
                    </Stack>
                </Stack>
                <Stack direction="row" border="2px solid #ded2d2" backgroundColor="white" borderRadius="7px" alignItems={"center"} width={props.width}>
                    <Stack width={"50%"} height={props.height}>
                        <Stack component="img" src={signIn} height="100%"  style={{ objectFit: "cover" }} />
                    </Stack>
                    {props.data}
                </Stack>
            </Stack>
        </Stack >
    )
}
