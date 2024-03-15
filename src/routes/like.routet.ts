import  Express from "express";
import { getBlogLikes,createBlogLike } from "../controllers/Likes.controller";
const likeRout= Express.Router()

likeRout.post("/:id/likes",createBlogLike);
likeRout.get("/:id/likes",getBlogLikes);

export default likeRout;