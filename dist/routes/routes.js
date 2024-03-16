"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//const express = require("express")
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const Blog_controllers_1 = __importDefault(require("../controllers/Blog.controllers"));
const blog_middeware_1 = __importDefault(require("../middlewares/blog.middeware"));
// Get all posts
router.get("/", Blog_controllers_1.default.GetAllblog);
//create new Blog
router.post("/", blog_middeware_1.default, Blog_controllers_1.default.newBlog);
//     // Get individual blog
router.get("/:id", Blog_controllers_1.default.singleBlog);
// // update Blog
router.patch("/:id", Blog_controllers_1.default.updateBlog);
// // delete Blog 
router.delete("/:id", Blog_controllers_1.default.deleteBlog);
//module.exports = router
exports.default = router;