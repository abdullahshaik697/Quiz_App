
// const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const key = 'abdullahshaikh03126600460'
const User = require('../models/User')

const postSignup = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await User.findOne({ email })
        if (user) {
            return res.send("Email already Exists")
        }
        const newUser = new User({ username, email, password })
        newUser.save()
        res.status(200).json({message: "success"})
    } catch (e) {
        console.log("postSignup Error:", e);

    }
}
const postLogin = async (req, res) => {
    try {
        // console.log("Request Body: ", req.body);
        const { email, password } = req.body;
        console.log("Request Body: ", req.body);
        
        const user = await User.findOne({ email }) 
        if (!user) {
            return res.status(404).send("User Not Found")
        }
        if(password != user.password){
            return res.status(400).send("Wrong Password")
        }
        let token = ""
        if(password === user.password){
            token = jwt.sign({user: user}, 
            key)
        }

        res.cookie("token", token)
        res.status(200).json({message: "success"})
        

    } catch (e) {
        console.log("postLogin Error:", e);

    }
}

const logout = (req, res) =>{

    try {
        res.clearCookie("token", { path: '/' })
        res.status(200).json({message: "success"})
        
        
    } catch (error) {
        console.log("Logout Error: ",error);
        
    }

}

module.exports = {
    postSignup,
    postLogin,
    logout

}