import Comment from  "../model/commentscheme";
import  { Request, Response } from 'express';
import blogSchem from "../model/blogSchem";
import mongoose  from "mongoose";

//create comment 

const newComment= async (req:Request , res:Response )=>{
try{

    const Id =  req.params.id;
    console.log(Id);
    if(!mongoose.Types.ObjectId.isValid(Id)){
    return res.status(400).json({
        message:"No Id found in our database"
    })
    }

const blog= await blogSchem.findById(Id);
if (!blog) {
    return res.status(404).json({
        message: "Blog not found"
    });
}
const comment=new Comment({
    User:req.body. User,
    comment:req.body.comment,
    blogId:Id,
});
const com = await comment.save();
console.log(com.comment);
 blog.commentArray.push(com.comment);

 await blog.save();

console.log(blog)

//  blog.commentArray.push(savedComment.comment);

return res.status(201).json({
    status:"Success",
    message:"Comment added successfully",
    comment:com
     ,blog:blog
})

}catch(Error){
    console.error(Error);
    return res.status(500).json({
        status:"Denied access",
        message:"incomplete operation",
    
    })

}

}

// get all comments

const getAllComment = async (req: Request, res: Response) => {
    try {
        const id=req.params.id;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid comment ID' });
        }
        const comments = await Comment.find({ blogId: id });
        if (!comments) {
            return res.status(404).json({ message: 'No comments found' });
        }
        return res.status(200).json({ message: 'Comments retrieved successfully', data: comments });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Internal server error', error: error });
    }
};
// get single comments 

const getSingleComment = async (req: Request, res: Response) => {
    try {
        const commentId = req.params.id;     
        if (!mongoose.Types.ObjectId.isValid(commentId)) {
            return res.status(400).json({ message: 'Invalid comment ID' });
        }
        
        const comment = await Comment.findById(commentId);
                
        if (!comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        
        return res.status(200).json({ message: 'Comment retrieved successfully', data: comment });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Internal server error', error: error });
    }
};


export default {newComment,getAllComment,getSingleComment};