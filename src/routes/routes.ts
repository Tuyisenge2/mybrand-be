//const express = require("express")
import express from 'express';
import authUser from "../permissiions/authUser";

import { checkAdmin } from '../middlewares/authorization';

const router = express.Router();
 import blogCont from "../controllers/Blog.controllers";  

import { isTitleUsed,isValid } from '../middlewares/blog.middeware';

    // Get all posts
    router.get("/", blogCont.GetAllblog )

    //create new Blog

    router.post("/",checkAdmin,isTitleUsed,isValid,blogCont.newBlog)
    
//     // Get individual blog

      
    router.get("/:id", blogCont.singleBlog)

// // update Blog

router.patch("/:id",checkAdmin,blogCont.updateBlog)

// // delete Blog 


router.delete("/:id",checkAdmin,blogCont.deleteBlog)

    //module.exports = router

    export default router;