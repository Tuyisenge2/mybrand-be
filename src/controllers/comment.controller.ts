import Comment from  "../model/commentscheme";
import  { Request, Response } from 'express';
import blogSchem from "../model/blogSchem";
import mongoose  from "mongoose";
import userScheme from "../model/userScheme";

import Jwt, { JwtPayload } from "jsonwebtoken";


//create comment 

const newComment= async (req:Request , res:Response )=>{
try{
// find user who comment

let token;        
  if(req.headers.authorization){
   token=req.headers.authorization;
        }
const decoded=Jwt.verify(String(token),"eonfeinefiueriu") as any;
          
const loggedUser= await userScheme.findById(decoded.id);

//end  of searching user

    const Id =  req.params.id;
    if(!mongoose.Types.ObjectId.isValid(Id)){
    return res.status(400).json({
        message:"invalid id"
    })
    }

const blog= await blogSchem.findById(Id);
if (!blog) {
    return res.status(404).json({
        message: "Blog not found"
    });
}
const comment=new Comment({
    User:loggedUser?._id,
    comment:req.body.comment,
    blogId:Id
});
const com = await comment.save();
console.log(com.comment);
const userAndComment={
   User:com.User,
   comments:comment.comment
};
if(userAndComment){
 blog.commentArray.push(userAndComment);
}
 await blog.save();

console.log(blog)

//  blog.commentArray.push(savedComment.comment);

return res.status(201).json({
    status:"Success",
    message:"Comment added successfully",
    blog:blog,
    commentt:com
})

}catch(Error){
    console.error(Error);
    return res.status(500).json({
        status:"Denied access",
        message:"server error",
    
    })

}

}

// get all comments on  one blog
  const getAllComment = async (req: Request, res: Response) => {
    try {
        const id=req.params.id;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ 
                message: 'Invalid comment ID' 
            });
        }
        let Arraycom:string[]=[];
        const comments = await Comment.find({ blogId: id });
      
        await Promise.all(comments.map(async (item) => {
            Arraycom.push(item.comment as string);
        }));
        

        if (!comments) {
            return res.status(404).json({ 
                message: 'No comments found' 
            });
        }
        
        return res.status(200).json({ 
            message: 'Comments retrieved successfully', 
            Comments: Arraycom
        });
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
        
        const resultComment = await Comment.findById(commentId);
                
        if (!resultComment) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        
        return res.status(200).json({ 
            message: 'Comment retrieved successfully', 
            data: resultComment.comment });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Internal server error', error: error });
    }
};


export default {newComment,getAllComment,getSingleComment};