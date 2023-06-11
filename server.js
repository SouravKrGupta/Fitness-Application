const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
//env config
dotenv.config();

//router import
const UserRouter = require("./routes/userRouter");

//mongodb connection
connectDB();
//rest object
const app = express();
//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
//routes
app.use("/users", UserRouter);
// app.get('/',(req,res)=>{
//     res.json("Hello Everyone")
// })
//Port
const PORT = process.env.PORT || 5000;
//listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode port no ${PORT} `.bgCyan
      .white
  );
});
