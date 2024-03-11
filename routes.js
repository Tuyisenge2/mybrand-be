const express = require("express")
    const Blog = require("./model/blogSchem") 
    const router = express.Router()
    
    // Get all posts
    router.get("/blogs", async (req, res) => {
        const blog = await Blog.find()
        res.send(blog)
    })

    //create new Blog

    router.post("/blogs/create", async (req, res) => {
        const blog = new Blog({
            title: req.body.title,
            summary:req.body.summary,
            description: req.body.description,
        })
        await blog.save()
        res.send(blog)
    })
    
    // Get individual blog

      
    router.get("/blogs/:id", async (req,res) => {
        try {
            const blog = await Blog.findOne({ _id: req.params.id })
            res.send(blog)
        } catch {
            res.status(404)
            res.send({ error: "Post doesn't exist!" })
        }
    })
// update Blog

router.patch("/blogs/update/:id", async (req, res) => {
    try {
        const blog = await Blog.findOne({ _id: req.params.id })

        if (req.body.title) {
            blog.title = req.body.title
        }

        if (req.body.content) {
            blog.content = req.body.content
        }

        await blog.save()
        res.send(blog)
    } catch {
        res.status(404)
        res.send({ error: "Post doesn't exist!" })
    }
})

// delete Blog 


router.delete("/blogs/delete/:id", async (req, res) => {
    try {
        await Blog.deleteOne({ _id: req.params.id })
        res.status(204).send()
    } catch {
        res.status(404)
        res.send({ error: "Post doesn't exist!" })
    }
})

    module.exports = router