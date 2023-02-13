const express=require("express")
const app=express()
const {connection}=require("./config/database")
const {userRouter}=require("./routes/User.route")
app.use(express.json())
app.use("/user",userRouter)
app.get("/",(req,res)=>{
res.send("home")
})

app.listen(process.env.PORT||4000,async()=>{
    try{
        await connection;
        console.log("connection to db succesfully")

    }catch(err){
      console.log(err);
      console.log("error in connecting db")
    }
    console.log(`listen to ${4000} successfully`)
})