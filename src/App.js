const express=require("express");
require("./db/DBConnection");
const app=express();
app.use(express.json());


// Routes 
const userRouter = require("./routes/User") ;
const friendRouter = require("./routes/Friend");




app.use("",userRouter);
app.use("",friendRouter);


const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Successfully Connected at ${port}`)
})