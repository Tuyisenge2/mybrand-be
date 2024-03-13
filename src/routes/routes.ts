//const express = require("express")
import express from 'express';
const router = express.Router();
 import blogCont from "../controllers/Blog.controllers";  

import isValid from "../middlewares/blog.middeware";
 
    // Get all posts
    router.get("/", blogCont.GetAllblog )

    //create new Blog

    router.post("/",isValid,blogCont.newBlog)
    
//     // Get individual blog

      
    router.get("/:id", blogCont.singleBlog)

// // update Blog

router.patch("/:id",blogCont.updateBlog  )

// // delete Blog 


router.delete("/:id",blogCont.deleteBlog)

    //module.exports = router

    export default router;