import Blog from  "../model/blogSchem";
import Express, { Request, Response } from 'express';
import { UploadToCloud } from "../Helper/cloud";

//Get all BLog
  const GetAllblog =  async ( req: Request, res: Response ) => {
    try {        
        const blogs = await Blog.find();

    if(!blogs){
        return res.status(404).json({ 
            error: "Blog no blog Found!" 
        });
       
    }


        return res.status(200).json({
            status:200,
            message:"success",
            blog:blogs
        });
      } catch (error) {
        // Handle errors appropriately
     return   res.status(500).json({
         error: 'An error occurred while fetching blogs' });
      }
  
  }
  
//Create Blog
const newBlog = async (req: Request, res: Response ) => {
    if (!req.file) {
        return res.status(400).json({
          message: "Please upload a file",
        });
      }
    
    try {

        const result = await UploadToCloud(req.file, res);


    const blog = new Blog({
        title: req.body.title,
        summary: req.body.summary,
        blogImage: (result as any).secure_url,
        description: req.body.description,
    });

    const existingTitle = await Blog.findOne({title:req.body.title });
    
    if(existingTitle){
    return res.status(409).json({
        status:409,
        message:"conflict on title of Blogs"
    })

}
      

        await blog.save();
return  res.status(201).json({
    status:201,
    message:"Blog created successfully",
    blog:blog

});
    } 
    
    catch (error:any) {
        
        res.status(500).json({ 
            error: error.message,
            message:"Server error"
        });
    }
};

const singleBlog = async (req: Request, res: Response ) => {
    try {
        const blog = await Blog.findOne({ _id: req.params.id });
        if (!blog) {
            res.status(404).json({ 
                error: "Blog doesn't exist!" 
            });
            return;
        }
        res.status(200).json({
            message:"single blog returned",
            blog:blog
            
            });
    } catch(error:any) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const updateBlog = async (req: Request, res: Response ) => {
    try {

        

        const blog = await Blog.findByIdAndUpdate(req.params.id, {
             title: req.body.title,
        summary: req.body.summary,
        description: req.body.description
        
        }, { new: true });

        if (!blog) {
            res.status(404).json({
                 error: "Blog doesn't exist!" 
                });
            return;
        }

      return  res.status(200).json({
            blog:blog
        });
    } catch (error:any) {
      return  res.status(500).json({ 
            error: error.message
         });
    }
};

const deleteBlog = async (req: Request, res: Response ) => {
    try {
        const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
        if (!deletedBlog) {
            res.status(404).json({
                 error: "Blog doesn't exist!" });
            return;
        }
       return res.status(204).json({
        message:"blog deleted succeffully"
       });
    } catch(error:any) {
     return   res.status(500).json({
             error: "Internal Server Error" });
    }
};

  export default  {GetAllblog,newBlog,singleBlog,updateBlog,deleteBlog};