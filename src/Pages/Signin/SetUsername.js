import React, { useState } from 'react'
import Layout from '../../Layout/Signin/Index'
import { Stack, Typography } from '@mui/material'
import Input from '../../Components/Input/Index'
import { PersonOutline as PersonOutlineIcon } from '@mui/icons-material'
import Password from '../../Components/Password/Index'
import Button from '../../Components/Button/Index'
import { useNavigate } from 'react-router-dom';

export default function SetUsername() {
    const navigate = useNavigate();

    const [inputValue, setValue] = useState({
        userName: "",
        password: "",
        confirmPassword: ""
    });
    const [err, setErr] = useState({})

    const changeHandler = (event) => {
        event.preventDefault()
        const { name, value } = event.target;
        setValue((prev) => ({ ...prev, [name]: value }))
    }

    const validateData = () => {
        const err = {}
        if (inputValue.userName === "") {
            err.userName = 'Enter Username'
        }
        if(inputValue.password ===""){
            err.password = "Enter Password"
        }
        if(inputValue.confirmPassword ===""){
            err.confirmPassword = "Enter Password"
        }
        if(inputValue.password !== inputValue.confirmPassword){
            err.confirmPassword="Password does not matched"
        }
        return err;
    }

    const clickHandler = (event) => {
        event.preventDefault();
        const err = validateData();
        if (Object.keys(err).length === 0) {
            navigate('/home')
        } else {
            setErr(err)
        }
    }
    return (
        <Layout width="800px" height="500px">
            <Stack spacing={3} alignItems={"center"} width="50%" component="form" justifyContent={"center"} onSubmit={clickHandler}>
                <Typography variant='h4' color="#0056FB" style={{ marginBottom: "20px", marginLeft: "40px" }}>Set User Name</Typography>
                <Stack spacing={2} alignItems={"center"}>

                    <Stack direction="row" spacing={2} height={"55px"}>
                        <PersonOutlineIcon style={{ marginTop: "10px" }} />
                        <Input
                            label="User Name"
                            name="userName"
                            type="text"
                            size="small"
                            value={inputValue.userName}
                            onChange={changeHandler}
                            err={Boolean(err.userName)}
                            helperText={err.userName}

                        ></Input>
                    </Stack>
                    <Stack height={"55px"}>
                        <Password
                            label="Password"
                            name="password"
                            size="small"
                            justifyContent="center"
                            value={inputValue.password}
                            onChange={changeHandler}
                            err={Boolean(err.password)}
                            helperText={err.password}
                            sx={{ width: "75%" }}
                        />
                    </Stack>
                    <Stack height={"55px"}>
                        <Password
                            label="Confirm Password"
                            name="confirmPassword"
                            size="small"
                            justifyContent="center"
                            value={inputValue.confirmPassword}
                            onChange={changeHandler}
                            err={Boolean(err.confirmPassword)}
                            helperText={err.confirmPassword}
                            sx={{ width: "75%" }}
                        />
                    </Stack>
                    <Stack direction="column" justifyContent={"center"} style={{ marginTop: "30px", marginLeft: "20px" }}>
                        <Button
                            variant='contained'
                            type="submit"
                            text="Sign In"
                        />
                    </Stack>
                </Stack>
            </Stack>
        </Layout>
    )
}