const express=require("express")
const ProductModel=require("../models/Products.model")
const PRouter=express.Router()

require("dotenv").config()

PRouter.get("/",async (req,res)=>{

    const q=req.query
    const product=await ProductModel.find(q)
    console.log(product)
    res.send({"data":product})
})


//     PRouter.post("/create",async (req,res)=>{
//         const {brand,
//             quantity,
//             name,
//             weight,
//             price,
//             isvailable,
//             mrp,
//             category,
//             ImgSrc}=req.body
// console.log(brand)
//         const product= new ProductModel({
//             brand,
//             quantity,
//             name,
//             weight,
//             price,
//             isvailable,
//             mrp,
//             category,
//             ImgSrc})
//     await product.save()
//     res.send("product create successfully")
        
//         });
        PRouter.post("/addmany", async (req, res) => {
            const payload = req.body;
            try {
                await ProductModel.insertMany(payload);
                res.send("Products added!");
                console.log(product);
            } catch (err) {
                console.log(err);
                res.send({ msg: "something went wrong" });
            }
        });
        
        
        // All product delete
        PRouter.delete("/deletemany", async (req, res) => {
            try {
                await ProductModel.deleteMany();
                res.send("All Products deleted!");
            }
            catch (err) {
                console.log(err);
                res.send({ msg: "something went wrong" });
            }
        });
        
        
        PRouter.post("/add", async (req, res) => {
            const payload = req.body;
            try {
                const product = new ProductModel(payload);
                await product.save();
                res.send("Product added!");
                console.log(product);
            } catch (err) {
                console.log(err);
                res.send({ msg: "something went wrong" });
            }
        });
        
        
        PRouter.patch("/update/:id", async (req, res) => {
            const payload = req.body;
            const id = req.params.id;
        
            try {
                await ProductModel.findByIdAndUpdate({ "_id": id }, payload);
                res.send("product Updated!");
            }
            catch (error) {
                console.log(err);
                res.send({ msg: "something went wrong" });
            }
        });
        
        
        PRouter.delete("/delete/:id", async (req, res) => {
            const id = req.params.id;
        
            try {
                await ProductModel.findByIdAndDelete({ "_id": id });
                res.send("Product Deleted!");
            } catch (error) {
                console.log(err);
                res.send({ msg: "something went wrong" });
            }
        });
        



        module.exports={
            PRouter
            }