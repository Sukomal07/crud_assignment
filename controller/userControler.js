const User = require('../models/userModel')

exports.home = (req, res) =>{
    res.send("hello world")
}

exports.createUser = async(req , res) =>{
    try {
        const {name , email, password} = req.body
        if(!name || !email || !password){
            throw new Error("Please enter all details")
        }
        const existUser = await User.findOne({email})
        if(existUser){
            throw new Error("User already exist")
        }
        const user = await User.create({
            name,
            email,
            password
        })
        res.status(201).json({
            success:true,
            message:"User created successfully",
            user
        })

    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message
        })
    }
}

exports.signIn = async(req, res) =>{
    try {
        const{email, password} = req.body
        if(!email || !password){
            throw new Error("Please enter all details")
        }
        const isRight = await User.findOne({email}).select("+password")
        if(!isRight){
            throw new Error("Please enter valid email or password")
        }

        if(password !== isRight.password){
            throw new Error("Please enter valid email or password")
        }
        res.status(200).json({
            success:true,
            message:"log in successfully",
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}
