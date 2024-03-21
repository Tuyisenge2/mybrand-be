
import validateBlog from '../validations/BlogValid';
import  Express, { NextFunction }  from 'express';
import Blog from  "../model/blogSchem";

const isTitleUsed=async (req: Express.Request, res: Express.Response, next:NextFunction)=>{
  //        const blog = await Blog.findOne({ _id: req.params.id });
const{title,summary,description}=req.body;

const blog = await Blog.findOne({ title:title });
if(blog){
  return res.status(400).json({
    status:400,
    message:"title was already used"
  })
}
  try {
    next();
  } catch (error) {
    console.log('error', error);
  }
};


const isValid =  (req: Express.Request, res: Express.Response, next:NextFunction) => {


  const { error } = validateBlog(req.body);

  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    next();
  } catch (error) {
    console.log('error', error);
  }
};

//module.exports = isValid;

export  {isTitleUsed,isValid};