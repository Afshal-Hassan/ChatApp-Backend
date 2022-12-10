const express=require("express");
require("./db/DBConnection");
const app=express();
const cors= require("cors");

app.use(express.json());
app.use(cors());


// Routes 
const userRouter = require("./routes/User") ;
const friendRouter = require("./routes/Friend");




app.use("",userRouter);
app.use("",friendRouter);

app.get("/hello",(req,res)=>{
    res.send("Hello");
})


const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Successfully Connected at ${port}`)
})