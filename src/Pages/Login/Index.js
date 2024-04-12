import { Typography, Stack , Box } from '@mui/material'
import Layout from '../../Layout/Signin/Index'
import React, { useState } from 'react'
import Input from '../../Components/Input/Index'
import Button from '../../Components/Button/Index'
import Password from '../../Components/Password/Index'
import { Link } from 'react-router-dom'
import { PersonOutline as PersonOutlineIcon } from '@mui/icons-material';
import Data from '../../Data/LoginData/LoginData'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext'

export default function Index() {
    const data = Data;
    const navigate = useNavigate();
    const { login, userData } = useAuth();

    const [value, setValue] = useState({
        userName: '',
        password: ''
    });

    const [err, setErr] = useState({})

    const changeHandler = (event) => {
        event.preventDefault()
        const { name, value } = event.target;
        setValue((prev) => ({ ...prev, [name]: value }))
    }
    const result = data.filter((obj) => obj.userName === value.userName)
    console.log(result)
    const validateData = () => {
        const err = {}
        let count = 0;
        if (data.length > 0) {
            data.forEach((data) => {
                if (data.userName === value.userName) {
                    count++;
                    if (data.password === value.password) {
                        navigate('/home');
                        userData(result[0])
                        login();
                    } else {
                        err.password = 'Invalid Password'
                    }
                }
            });
            if (count === 0) {
                err.userName = 'Invalid Username'
            }
        }
        return err;
    }

    const clickHandler = (event) => {
        event.preventDefault();

        const err = validateData();

        if (Object.keys(err).length !== 0) {
            setErr(err)
        }
    }

    return (
        <Layout width="900px" height="525px" >
            <Stack spacing={3} padding="40px 55px" alignItems={"center"} width="50%" component="form" onSubmit={clickHandler} >
                <Typography variant='h4' color="#0056FB" style={{ marginBottom: "20px" }}>Log In</Typography>
                <Stack direction="row" spacing={2} height={"50px"}>
                    <PersonOutlineIcon style={{ marginTop: "10px" }} />
                    <Input
                        label="User Name"
                        name="userName"
                        type="text"
                        size="small"
                        value={value.name}
                        onChange={changeHandler}
                        err={Boolean(err.userName)}
                        helperText={err.userName}
                    ></Input>
                </Stack>
                <Password
                    label="Password"
                    name="password"
                    size="small"
                    value={value.password}
                    onChange={changeHandler}
                    sx={{ width: "75%" }}
                    justifyContent="center"
                    err={Boolean(err.password)}
                    helperText={err.password}
                />
                <Stack direction="column" justifyContent={"center"} >
                    <Button
                        variant='contained'
                        type="submit"
                        text="Log In"
                    />
                </Stack>
                <Stack spacing={4} alignItems={"center"} style={{ marginTop: "100px" }} justifyContent={"center"} width={"100%"}>
                    <Stack direction={"row"} width={"100%"}>
                        <Stack borderTop={'2px solid black'} margin='auto 10px'  width={"20%"}></Stack>
                        <Typography variant="span">New to HealthCare</Typography>
                        <Stack borderTop={'2px solid black'}  margin='auto 10px' width={"20%"}></Stack>
                    </Stack>

                    <Link to="/signin" style={{ width: '100%' }}>
                        <Button
                            variant='outlined'
                            text='Create Account'
                            sx={{ width: "100%" }}
                        />
                    </Link>
                </Stack>
            </Stack>
        </Layout>
    )
}

