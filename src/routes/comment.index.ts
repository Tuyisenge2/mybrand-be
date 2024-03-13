import express  from "express";

import router from "./comment.routes";

const apiRouter=express.Router();

apiRouter.use("/Blogs/:id/",router)

export  default apiRouter;