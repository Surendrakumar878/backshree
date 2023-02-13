const express=require("express")
const ProductModel=require("../models/Products.model")
const PRouter=express.Router()

require("dotenv").config()

PRouter.get("/",async (req,res)=>{
    const product=await ProductModel.find()
    console.log(product)
    res.send({"data":product})
})


    PRouter.post("/create",async (req,res)=>{
        const {brand,
            quantity,
            name,
            weight,
            price,
            isvailable,
            mrp,
            category,
            ImgSrc}=req.body
console.log(brand)
        const product= new ProductModel({brand,
            quantity,
            name,
            weight,
            price,
            isvailable,
            mrp,
            category,
            ImgSrc})
    await product.save()
    res.send("product create successfully")
        
        });
        
        module.exports={
            PRouter
            }