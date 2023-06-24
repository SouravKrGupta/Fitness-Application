import { Routes, Route } from "react-router-dom";
import { useMemo } from "react";
import './App.css';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { Toaster } from "react-hot-toast";
import { themeSettings } from "./theme";
import Navbar from "./component/Navbar";
import Register from "./component/Register"
import Login from "./component/Login";
import Home from "./page/Home";
import ExerciseDetail from "./page/ExerciseDetail";
import Footer from "./component/Footer";
import About from "./About/about"
import Bmi from "./Calculator/BmiCal";
import Deit from "./Deits/deitHome";
function App() {
  const theme = useMemo(() => createTheme(themeSettings()), []);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Toaster />
        <Routes>
     
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path='/exercise/:id' element={<ExerciseDetail/>}/>
          <Route path='/calculator' element={<Bmi/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/diets' element={<Deit/>}/>
        </Routes>
        <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
