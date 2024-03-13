import Blog from  "../model/blogSchem";
import Express from 'express';


//Get all BLog
  const GetAllblog =  async (req: Express.Request, res: Express.Response) => {
    try {
        
        const blogs = await Blog.find();
        res.send(blogs);
      } catch (error) {
        // Handle errors appropriately
        res.status(500).send({ error: 'An error occurred while fetching blogs' });
      }
  
  }
  
//Create Blog

const newBlog = async ( req: Express.Request, res: Express.Response) => {
    const blog = new Blog( {
        title: req.body.title,
        summary:req.body.summary,
        description: req.body.description,
    })
    await blog.save()
    res.send(blog)
}

//Get individual Blog

const singleBlog= async (req: Express.Request, res: Express.Response) => {
    try {
        const blog = await Blog.findOne({ _id: req.params.id })
        res.send(blog)
    } catch {
        res.status(404)
        res.send({ error: "Post doesn't exist!" })
    }
}


//update Blog 

const updateBlog= async (req: Express.Request, res: Express.Response) => {
    try {
        const blog = await Blog.findById(req.params.id,{
            title : req.body.title,
            content : req.body.content,
        })

        await blog?.save();
        res.send(blog);

    } catch {
        res.status(404)
        res.send({ error: "Post doesn't exist!" })
    }
} 


// delete Blog 

const deleteBlog=  async (req: Express.Request, res: Express.Response) => {
    try {
        await Blog.deleteOne({ _id: req.params.id })
        res.status(204).send()
    } catch {
        res.status(404)
        res.send({ error: "Post doesn't exist!" })
    }
}

  export default  {GetAllblog,newBlog,singleBlog,updateBlog,deleteBlog};