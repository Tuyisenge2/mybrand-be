import apiRouter from "./routes/index"; // new

 
import express from "express";

const app = express()

app.use(express.json()) // new

app.use("/api",apiRouter) // new


export default app;

