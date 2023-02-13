const express=require("express")
const UserModel=require("../models/User.model")
const userRouter=express.Router()
const bcrypt = require('bcrypt');
require("dotenv").config()
const jwt = require('jsonwebtoken');
userRouter.get("/",async (req,res)=>{
    const user=await UserModel.find()
    res.send({"user":user})
})

userRouter.post("/signup",async (req,res)=>{
   
    const {name,email,password}=req.body
    const user=await UserModel.find({email})
    if(user.length>1||user.length>=1){
        res.send("this already exits")
    }else{

    
    
    try{
    bcrypt.hash(password, 8, async (err, hash)=>{
    const user=new UserModel({name,email,password:hash})
    await user.save()
    res.send("Registered")
    });
    }catch(err){
    res.send("Error in registering the user")
    console.log(err)
    }}
    })
    userRouter.post("/login",async (req,res)=>{
        const {email,password}=req.body
    
        try{
        const user=await UserModel.find({email})
        if(user.length>0){
        bcrypt.compare(password, user[0].password, function(err, result) {
        if(result){
        const token = jwt.sign({ course: 'backend' }, process.env.jwt_secret_key);
        res.send({"msg":"Login Successfull","token":token})
        } else {res.send("Wrong Credntials")}
        });
        } else {
        res.send("Wrong Credntials")
        }
        } catch(err){
        res.send("Something went wrong")
        console.log(err)
        }
        });
        
        module.exports={
            userRouter
            }