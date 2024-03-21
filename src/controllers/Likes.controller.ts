import { Express, Request, Response } from "express";
import mongoose from "mongoose";
import blogLikeScheme from "../model/Bloglike";
 import blogSchem from "../model/blogSchem";
 

// Controller function to create a like for a blog
 
const createBlogLike = async (req:Request, res:Response) => {
    try {
        const blogid = req.params.id;
      const existingLike= await blogLikeScheme.findById(blogid);
        if (!mongoose.Types.ObjectId.isValid(blogid)) {
            return res.status(400).json({ message: "Invalid blog ID" });
        }

        
const blog= await blogSchem.findById(blogid);
if (!blog) {
    return res.status(404).json({
        message: "Blog not found"
    });
}

        const like = new blogLikeScheme({
            blogId: blogid,
        });

       const savedLike= await like.save();

        return res.status(201).json({ message: "Like created successfully", data: like });
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
