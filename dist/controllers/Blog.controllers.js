"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const blogSchem_1 = __importDefault(require("../model/blogSchem"));
//Get all BLog
const GetAllblog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogs = yield blogSchem_1.default.find();
        return res.status(200).json({
            status: 200,
            message: "success",
            blog: blogs
        });
    }
    catch (error) {
        // Handle errors appropriately
        return res.status(500).json({ error: 'An error occurred while fetching blogs' });
    }
});
//Create Blog
const newBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blog = new blogSchem_1.default({
            title: req.body.title,
            summary: req.body.summary,
            description: req.body.description,
        });
        const existingTitle = yield blogSchem_1.default.findOne({ title: req.body.title });
        if (existingTitle) {
            return res.status(400).json({
                status: 400,
                message: "Title has been used"
            });
        }
        yield blog.save();
        return res.status(201).json({
            status: 201,
            message: "Blog created successfully",
            blog: blog
        });
    }
    catch (error) {
        res.status(500).json({
            error: error.message,
            message: "Server error"
        });
    }
});
const singleBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blog = yield blogSchem_1.default.findOne({ _id: req.params.id });
        if (!blog) {
            res.status(404).json({ error: "Blog doesn't exist!" });
            return;
        }
        res.status(200).json(blog);
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});
const updateBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blog = yield blogSchem_1.default.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            content: req.body.content,
        }, { new: true });
        if (!blog) {
            res.status(404).json({ error: "Blog doesn't exist!" });
            return;
        }
        res.status(200).json(blog);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
const deleteBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedBlog = yield blogSchem_1.default.findByIdAndDelete(req.params.id);
        if (!deletedBlog) {
            res.status(404).json({ error: "Blog doesn't exist!" });
            return;
        }
        res.status(204).json();
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.default = { GetAllblog, newBlog, singleBlog, updateBlog, deleteBlog };
