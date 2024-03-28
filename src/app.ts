import apiRouter from "./routes/index"; // new
import swaggerUi from "swagger-ui-express";
import swaggerOutput from "./documentation/swagger_output.json"
import swaggerUI from "swagger-ui-express";
import docs from "./document";
import express from "express";

const app = express()

app.use(express.json()) // new

app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(docs));


app.use("/api",apiRouter) // new

app.use('/api',(req,res)=>{
  
    res.status(200).json({
        message:"warm welcome on my portfolio"
    })   

})

export default app;

