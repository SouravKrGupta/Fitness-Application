const Users =require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userController = {
    registerUser:async(req,res)=>{
        try {
            const {username,email,password} = req.body;
            const user =await Users.findOne({email:email})
            if(user) return res.status(400).json({msg:"The email already exists."})
            const passwordHash =await bcrypt.hash(password,10)
            const newUser =new Users({
                username:username,
                email:email,
                password:passwordHash
            })
            await newUser.save()
            res.json({msg:"Sign up Success"})
        } catch (err) {
            return res.status(500).json({msg:err.message})
            
        }
    },
    loginUser:async(req,res)=>{
        try {
            const {email,password} =req.body;
            const user =await Users.findOne({email:email})
            if(!user) return res.status(400).json({msg:"User does not exist."})

            const isMatch =await bcrypt.compare(password,user.password)
            if(!isMatch) return res.status(400).json({msg:"Incorrect password."})

            //if login Success create token
            const payload = {id: user._id,name:user.username}
            const token = jwt.sign(payload,process.env.TOKEN_SECRET,{expiresIn: "1d"})
                 res.json({token})
            // res.json({msg:"Login Success"})
        } catch (err) {
            return res.status(500).json({msg:err.message})
        }
         },

        verifiedToken: (req,res)=>{
            try {
                const token =req.header("Authorization")
                if(!token) return res.send(false)

                jwt.verify(token,process.env.TOKEN_SECRET,async(err,verified) =>{
                    if(err) return res.send(false)
                    const user =await Users.findById(verified.id)
                    if(!user) return res.send(false)

                    return res.send(true)

                })
            } catch (err) {
                return res.status(500).json({msg:err.message})
                
            }
        },
        //logout 
        logoutUser : (req,res)=>{
            try {
                // Clear the token from the client-side (e.g., remove it from local storage or cookies)
                res.clearCookie('token');
            
                // Return a success message
                res.json({ msg: 'Logout successful' });
              } catch (err) {
                return res.status(500).json({ msg: err.message });
              }
        } 
       
}


module.exports =userController