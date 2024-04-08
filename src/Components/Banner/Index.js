import { Stack , Container , Typography } from '@mui/material'
import React from 'react'
import Button from '../Button/Index'
import logo from '../../Assets/Images/logos/logo.png'

export default function Index() {
  return (
    <Stack style={{backgroundImage:`url(${logo})`}}>
        <Container>
            <Typography variant="body1">Total Health Care Solution</Typography>
            <Typography variant="h3">Your Most Trusted Health Partner</Typography>
            <Typography variant="body2">A repudiandae ipsam labo ipsa voluptatum quidem quae laudantium quisquam aperiam maiores sunt fugit, deserunt rem suscipit placeat.</Typography>
            <Button 
                variant="contained"
                text="Make Appointment"
                style={{borderRadius:"50px"}}
            />
        </Container>
    </Stack>
  )
}
