import apiRouter from "./routes/index"; // new
import swaggerUi from "swagger-ui-express";
import swaggerOutput from "./documentation/swagger_output.json"
 

import express from "express";

const app = express()

app.use(express.json()) // new

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOutput));


app.use("/api",apiRouter) // new

app.use('/api',(req,res)=>{
  
    res.status(200).json({
        message:"warm welcome on my portfolio"
    })   

})

export default app;

