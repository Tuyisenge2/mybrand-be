import { Express, Request, Response } from "express";
import mongoose from "mongoose";
import blogLikeScheme from "../model/Bloglike";
 import blogSchem from "../model/blogSchem";
import Jwt, { JwtPayload } from "jsonwebtoken";
 import userScheme from "../model/userScheme";

// Controller function to create a like for a blog
 
const createBlogLike = async (req:Request, res:Response) => {
    try {
         
     let token;        
     if(req.headers.authorization){
     token=req.headers.authorization;
      } 
         const decoded=Jwt.verify(String(token),"eonfeinefiueriu") as any;
        const loggedUser= await userScheme.findById(decoded.id);

        const blogid = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(blogid)){
            return res.status(400).json({
                 message: "Invalid blog ID" 
                        });
        }
        const existingLike= await blogLikeScheme.findById(blogid);

        const blog= await blogSchem.findById(blogid);
if (!blog) {
    return res.status(404).json({
        message: "Blog not found"
    });
}
     

        const like = new blogLikeScheme({
            userId:loggedUser?._id,
            blogId: blogid
        });

        if(blog.likesArray.includes(like.userId)){
            let index=blog.likesArray.indexOf(like.userId);
            if(index !== -1)
            {
              blog.likesArray.splice(index,1);                
            }
            await blog.save();

            return res.status(201).json({ 
                message: "Like removed successfully",
                blog:blog.likesArray                       
                            });

        }

    blog.likesArray.push(like.userId);

          const savedLike= await like.save();
          await blog.save();
       
          return res.status(201).json({ 
            message: "Like Added successfully", 
           data: like,
           blog:blog.likesArray                       
        });
    } catch (Error ) {
        
        console.error(Error);
        return res.status(500).json({ message: "Internal server error", error: Error });
   
    }
};

const getBlogLikes = async (req:Request, res:Response) => {
    try {
        const blogId = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(blogId)) {
            return res.status(400).json({ message: "Invalid blog ID" });
        }

        const likes = await blogLikeScheme.find({ blogId: blogId });

        return res.status(200).json({ message: "Likes retrieved successfully", data: likes });
    } catch (Error) {
        console.error(Error);
        return res.status(500).json({ message: "Internal server error", error: Error });
    }
};

export { createBlogLike, getBlogLikes };
