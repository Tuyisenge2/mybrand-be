import  express from "express";
import { isUSerLoggedIn } from "../middlewares/authorization";
import { checkAdmin } from "../middlewares/authorization";
const comRouter=express.Router();

import commentController from "../controllers/comment.controller";

comRouter.post("/:id/comments",isUSerLoggedIn,commentController.newComment)

//getAllComment on blog
comRouter.get("/:id/comments",commentController.getAllComment)

//getSinglecomments

comRouter.get("/comments/:id",commentController.getSingleComment)
export default comRouter;
