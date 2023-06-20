import React, { useState } from "react";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
const BmiCal = () => {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calcBmi = (event) => {
    //prevent submitting
    event.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
    } else {
      let bmi = (weight / (height * height)) ;
      setBmi(bmi.toFixed(1));

      // Logic for message

      if (bmi < 25) {
        setMessage("You are underweight");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("You are a healthy weight");
      } else {
        setMessage("You are overweight");
      }
    }
  };

  let imgSrc;

  if (bmi < 1) {
    imgSrc =require("../assets/bmi/healthy1.png");
  } else {
    if (bmi < 25) {
      imgSrc = require("../assets/bmi/underweight.png");
    } else if (bmi >= 25 && bmi < 30) {
      imgSrc = require("../assets/bmi/healthy1.png");
    } else {
      imgSrc = require("../assets/bmi/overweight.png");
    }
  }

  let reload = () => {
    window.location.reload()
  }
  return (
    <Box
      width={"75%"}
      border={3}
      borderRadius={10}
      padding={3}
      margin="auto"
      boxShadow={"10px 10px 20px #ccc"}
      display="flex"
      flexDirection={"row"}
      marginTop="30px"
    >
      <Box
        display="flex"
        flexDirection={"column"}
        width={"45%"}
        border={3}
        borderRadius={10}
        padding={2}
        // margin="auto"
        boxShadow={"10px 10px 20px #ccc"}
      >
        
      <Typography
        variant="h2"
        textAlign={"center"}
        fontWeight="bold"
        padding={3}
        color="red"
      >
        Body mass index
      </Typography>
        <form onSubmit={calcBmi}>
          <Box display="flex" flexDirection={"column"}>
            <InputLabel
              sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
            >
              Weight (lbs)
            </InputLabel>
            <TextField
              name="Weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              margin="normal"
              variant="outlined"
              required
            />
            <InputLabel
              sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
            >
              Height (inch)
            </InputLabel>
            <TextField
              name="Hight"
              value={height}
              onChange={(event) => setHeight(event.target.value)}
              margin="normal"
              variant="outlined"
              required
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              sx={{ m: 2 }}
            >
              SUBMIT
            </Button>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              sx={{ m: 2 }}
              onClick={reload} 
            >
              Reload
            </Button>
          </Box>
        </form>
      </Box>


      <Box   display="flex"
     flexDirection={"column"}
     width={"50%"}
     border={3}
     borderRadius={10}
     padding={2}
     margin="auto"
     boxShadow={"10px 10px 20px #ccc"}

     marginTop="30px">
       <Typography variant="h3" textAlign={"center"} fontWeight="bold">
         Your BMI is: {bmi}
       </Typography>
       <Typography variant="h4" textAlign={"center"}>
         {message}
       </Typography>

     <Box  display="flex"
     flexDirection={"column"}
    
     >
       <img src={imgSrc}  />
     </Box>
     </Box>

    </Box>

  );
};

export default BmiCal;
