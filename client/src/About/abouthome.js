import React from 'react'
import { Box,  Typography } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png'
const abouthome = () => {
  return (
    <Box sx={{ mt: { lg: '90px', xs: '50px' }, ml: { sm: '50px' } }} position="relative" p="10px" >
      
        <Typography color="#FF2625" fontWeight={600} fontSize="26px" sx={{width:{lg:'550px', xs:'200px'} }}>
          STAYING HEALTHY AND FIT IS THE NEW GOAL
        </Typography>
        <Typography fontWeight={500} sx={{ fontSize: { lg: '45px', xs: '40px' } }} mb="23px" mt="30px" width={"35%"}>
          Welcome to our fitness application!
          <br /> We are passionate about helping individuals achieve their fitness goals and live a healthy lifestyle.
        </Typography>
        <Typography color="#FF2625" fontWeight={600} fontSize="56px" fontFamily="Alegreya" lineHeight="35px">
          Our Mission
        </Typography>
        <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px" mt="65px">
          At our fitness application, our mission is to provide a user-friendly platform that empowers people to take
          control of their fitness journey. We believe that everyone deserves access to tools and resources that can help
          them lead a healthier life.
        </Typography>
    
 
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
 
 
  </Box>
  )
}

export default abouthome