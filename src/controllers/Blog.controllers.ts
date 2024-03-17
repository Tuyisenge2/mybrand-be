import Blog from  "../model/blogSchem";
import Express, { Request, Response } from 'express';


//Get all BLog
  const GetAllblog =  async ( req: Request, res: Response ) => {
    try {
        
        
        const blogs = await Blog.find();
        return res.status(200).json({
            status:200,
            blog:blogs
        });
      } catch (error) {
        // Handle errors appropriately
     return   res.status(500).json({ error: 'An error occurred while fetching blogs' });
      }
  
  }
  
//Create Blog
const newBlog = async (req: Request, res: Response ) => {
    const blog = new Blog({
        title: req.body.title,
        summary: req.body.summary,
        description: req.body.description,
    });

    try {
        await blog.save();
        res.status(201).json(blog);
    } catch (error:any) {
        res.status(400).json({ error: error.message });
    }
};

const singleBlog = async (req: Request, res: Response ) => {
    try {
        const blog = await Blog.findOne({ _id: req.params.id });
        if (!blog) {
            res.status(404).json({ error: "Blog doesn't exist!" });
            return;
        }
        res.status(200).json(blog);
    } catch(error:any) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const updateBlog = async (req: Request, res: Response ) => {
    try {
        const blog = await Blog.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            content: req.body.content,
        }, { new: true });

        if (!blog) {
            res.status(404).json({ error: "Blog doesn't exist!" });
            return;
        }
        res.status(200).json(blog);
    } catch (error:any) {
        res.status(400).json({ error: error.message });
    }
};

const deleteBlog = async (req: Request, res: Response ) => {
    try {
        const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
        if (!deletedBlog) {
            res.status(404).json({ error: "Blog doesn't exist!" });
            return;
        }
        res.status(204).json();
    } catch(error:any) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

  export default  {GetAllblog,newBlog,singleBlog,updateBlog,deleteBlog};