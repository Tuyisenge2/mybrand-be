import routes from "./routes"; // new
import routerComment from "./routes/comment.routes";
import express from "express";

const app = express()

app.use(express.json()) // new

app.use("/api", routes) // new
app.use("/api",routerComment)
              
export default app;

