import { Typography, Stack } from '@mui/material'
import Layout from '../../Layout/Signin/Index'
import React from 'react'
import Input from '../../Components/Input/Index'
import Button from '../../Components/Button/Index'
import Password from '../../Components/Password/Index'
import { Link } from 'react-router-dom'
import { PersonOutline as PersonOutlineIcon } from '@mui/icons-material';

export default function Index() {
    const data = (<Stack spacing={3} padding="40px 55px" alignItems={"center"} width="50%" >
        <Typography variant='h4' color="#0056FB">Log In</Typography>
        <Stack direction="row" alignItems="center" spacing={2}>
            <PersonOutlineIcon />
            <Input
                label="User Name"
                name="userName"
                type="text"
                size="small"
            // value={inputValue.firstName}
            // onChange={handleChange}
            // err={Boolean(error.firstName)}
            // helperText={error.firstName}
            ></Input>
        </Stack>
        <Password
            label="Password"
            name="password"
            size="small"
            sx={{ width: "75%" }}
            justifyContent="center"
            alignItems="center"
        />
        <Stack direction="column" justifyContent={"center"} >
            <Button
                variant='contained'
                type="submit"
                text="Log In"
            />
        </Stack>
        <Stack spacing={4} alignItems={"center"} style={{ marginTop: "100px" }}>
            <Typography variant="span">--------------New to HealthCare--------------</Typography>

            <Link to="/signin" style={{ width: '100%' }}>
                <Button
                    variant='outlined'
                    text='Create Account'
                    width="100%"
                />
            </Link>
        </Stack>
    </Stack>)
    return (

        <Layout data={data} width="900px" height="500px" />

    )
}

