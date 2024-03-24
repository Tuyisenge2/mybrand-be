import  Express from "express";
import { getBlogLikes,createBlogLike } from "../controllers/Likes.controller";
import { isUSerLoggedIn } from "../middlewares/authorization";

const likeRout= Express.Router()

likeRout.post("/:id/likes",isUSerLoggedIn,createBlogLike);
likeRout.get("/:id/likes",getBlogLikes);

export default likeRout;