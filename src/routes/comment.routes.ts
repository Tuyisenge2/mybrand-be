import  express from "express";
const router=express.Router();
import commentController from "../controllers/comment.controller";

router.post("/",commentController.newComment)

export default router;