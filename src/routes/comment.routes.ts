import  express from "express";

const comRouter=express.Router();

import commentController from "../controllers/comment.controller";

comRouter.post("/:id/comments",commentController.newComment)

//getAllComment on blog
comRouter.get("/:id/comments",commentController.getAllComment)

//getSinglecomments

comRouter.get("/comments/:id",commentController.getSingleComment)
export default comRouter;
