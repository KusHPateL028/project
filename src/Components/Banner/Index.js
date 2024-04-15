import { Stack, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import Button from '../Button/Index'
import Banner from '../../Assets/Images/Banner/banner.jpg'

export default function Index() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 899);
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize); 
    };
  }, []);
  return (
    <Stack style={{
      backgroundImage: `url(${Banner})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      maxWidth: "100vw",
    }} justifyContent={"center"}>
      <Stack width={"70%"} alignItems={"center"} py={15}>
        <Stack width="90%" maxWidth={"600px"} spacing={2}>
          <Typography variant="body1" color="#6F8BA4" style={{ opacity: "0.7" }}>Total Health Care Solution</Typography>
          <Typography variant="h3" width={"80%"} color="#223A66" fontWeight={"bold"} fontFamily={"sans-serif"}>Your Most Trusted Health Partner</Typography>
          <Typography variant="body1" width={"90%"} color="#6F8BA4" lineHeight={"30px"}>A repudiandae ipsam labo ipsa voluptatum quidem quae laudantium quisquam aperiam maiores sunt fugit, deserunt rem suscipit placeat.</Typography>
          <Button
            variant="contained"
            text="Make Appointment"
            sx={{
              borderRadius: "50px",
              marginTop: "35px",
              width: "35%",
              backgroundColor: "#e12454",
              '&:hover':{
                backgroundColor:"transparant",
                color:"#e12454",
                border:"1px solid #e12454"
              }
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  )
}
