import apiRouter from "./routes/index"; // new

 
import express from "express";

const app = express()

app.use(express.json()) // new

app.use("/api",apiRouter) // new

app.use('/api',(req,res)=>{
  
    res.status(200).json({
        message:"warm welcome on my portfolio"
    })   

})

export default app;

