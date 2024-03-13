import Comment from  "../model/commentscheme";
import Express from 'express';
import blogSchem from "../model/blogSchem";

//create comment 

const newComment= async (req: Express.Request, res: Express.Response)=>{
try{
    const Id = req.params.id;
   const comment=new Comment({
    comment:req.body.comment,
    blogId:Id
});
const blog= await blogSchem.findById(Id);


await comment?.save();
res.send(Comment);

}catch(Error){}

}

export default {newComment};