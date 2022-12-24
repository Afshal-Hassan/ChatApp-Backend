const express=require("express");
require("./db/DBConnection");
const app = express();
const server = require("http").createServer(app);
const {Server} = require("socket.io");
const cors= require("cors");
const error = require("./middlewares/ErrorHandler");
const io = new Server(server,{
    cors:{
        origin: "*"
    }
})
app.use(express.json());
app.use(cors());



// Routes 
const userRouter = require("./routes/User") ;
const friendRouter = require("./routes/Friend");
const privateRoomsRouter = require("./routes/PrivateRoom");




app.use("",userRouter);
app.use("",friendRouter);
app.use("",privateRoomsRouter);



app.get("/hello",(req,res)=>{
    res.send("Hello");
})

//Socket 

io.on("connection",(socket)=>{
    console.log(`User connected: ${socket.id} `);
    socket.on("join-room",(data)=>{
        console.log(data);
        socket.join(data);
    })
    socket.on("send-message",(data)=>{
        console.log(data);
        socket.to(data.room).emit("receive-message",data);
    })
});

const port=process.env.PORT || 5000;
server.listen(port,()=>{
    console.log(`Successfully Connected at ${port}`)
});

app.use(error);