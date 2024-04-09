import { Stack, Container, Typography } from '@mui/material'
import React from 'react'
import Button from '../Button/Index'
import Banner from '../../Assets/Images/Banner/banner.jpg'

export default function Index() {
  console.log(window.width)
  return (
    <Stack style={{
      backgroundImage: `url(${Banner})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100%",
      width: '100%',
      minHeight: '500px'
    }} justifyContent={"center"}>
      <Stack width={"70%"} alignItems={"center"} >
        <Stack width={"65%"}>
          <Typography variant="body1">Total Health Care Solution</Typography>
          <Typography variant="h3">Your Most Trusted Health Partner</Typography>
          <Typography variant="body2">A repudiandae ipsam labo ipsa voluptatum quidem quae laudantium quisquam aperiam maiores sunt fugit, deserunt rem suscipit placeat.</Typography>
          <Button
            variant="contained"
            text="Make Appointment"
            width="35%"
            style={{ borderRadius: "50px" }}
          />
        </Stack>
      </Stack>
    </Stack>
  )
}
