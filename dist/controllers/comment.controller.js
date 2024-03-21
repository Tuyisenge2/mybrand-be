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
const commentscheme_1 = __importDefault(require("../model/commentscheme"));
const blogSchem_1 = __importDefault(require("../model/blogSchem"));
const mongoose_1 = __importDefault(require("mongoose"));
//create comment 
const newComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Id = req.params.id;
        console.log(Id);
        if (!mongoose_1.default.Types.ObjectId.isValid(Id)) {
            return res.status(400).json({
                message: "No Id found in our database"
            });
        }
        const blog = yield blogSchem_1.default.findById(Id);
        if (!blog) {
            return res.status(404).json({
                message: "Blog not found"
            });
        }
        const comment = new commentscheme_1.default({
            User: req.body.User,
            comment: req.body.comment,
            blogId: Id,
        });
        const com = yield comment.save();
        console.log(com.comment);
        blog.commentArray.push(com.comment);
        yield blog.save();
        console.log(blog);
        //  blog.commentArray.push(savedComment.comment);
        return res.status(201).json({
            status: "Success",
            message: "Comment added successfully",
            comment: com
        });
    }
    catch (Error) {
        console.error(Error);
        return res.status(500).json({
            status: "Denied access",
            message: "incomplete operation",
        });
    }
});
// get all comments
const getAllComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid comment ID' });
        }
        const comments = yield commentscheme_1.default.find({ blogId: id });
        if (!comments) {
            return res.status(404).json({ message: 'No comments found' });
        }
        return res.status(200).json({ message: 'Comments retrieved successfully', data: comments });
    }
    catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Internal server error', error: error });
    }
});
// get single comments 
const getSingleComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const commentId = req.params.id;
        if (!mongoose_1.default.Types.ObjectId.isValid(commentId)) {
            return res.status(400).json({ message: 'Invalid comment ID' });
        }
        const comment = yield commentscheme_1.default.findById(commentId);
        if (!comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        return res.status(200).json({ message: 'Comment retrieved successfully', data: comment });
    }
    catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Internal server error', error: error });
    }
});
exports.default = { newComment, getAllComment, getSingleComment };
