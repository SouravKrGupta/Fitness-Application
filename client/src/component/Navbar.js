import React from 'react'
import { Box, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.png'
const Navbar = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const loggedIn = JSON.parse(localStorage.getItem("authToken"));
  
    //handle logout
    const handleLogout = async () => {
      try {
        await axios.post("/users/logout");
        localStorage.removeItem("authToken");
        toast.success("logout successfully ");
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    };
  return (
    <Box
    width={"100%"}
    backgroundColor={theme.palette.background.alt}
    p="1rem 6%"
    textAlign={"center"}
   
  
  >
      <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '48px', height: '48px',   margin: '0px 10px',
    float: 'left' }} />
    </Link>
      <Typography variant="h1" color="primary" fontWeight="bold">
        Fitness Application
      </Typography>
      {loggedIn ? (
       
        <Box sx={{ display: 'flex',gap:5, justifyContent: 'center' }} variant="h6" color="primary" fontWeight="bold">
        
        <NavLink to="/" p={1} >
            Home
          </NavLink>
          {/* <NavLink to="/exercise" p={1} >
            Exercise
          </NavLink> */}
          <NavLink to="/about" p={1} >
            About
          </NavLink>
          <NavLink to="/calculator" p={1} >
            Calculator
          </NavLink>
          <NavLink to="/blogs" p={1} >
            Blogs
          </NavLink>
          <NavLink to="/diets" p={1} >
            Diets
          </NavLink>
          
          <NavLink to="/login" onClick={handleLogout} p={1}>
            Logout
          </NavLink>
        </Box>
        
        
      ) : (
        <Box sx={{ display: 'flex',gap:5, justifyContent: 'center' }} variant="h6" color="primary" fontWeight="bold">
          <NavLink to="/register" p={1} >
            Sign Up  
          </NavLink>
          <NavLink to="/login" p={1} >
            Sign In 
          </NavLink>
        </Box>
      )}
    </Box>
  )
}

export default Navbar