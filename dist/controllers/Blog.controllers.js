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
        res.send(blogs);
    }
    catch (error) {
        // Handle errors appropriately
        res.status(500).send({ error: 'An error occurred while fetching blogs' });
    }
});
//Create Blog
const newBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = new blogSchem_1.default({
        title: req.body.title,
        summary: req.body.summary,
        description: req.body.description,
    });
    yield blog.save();
    res.send(blog);
});
//Get individual Blog
const singleBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blog = yield blogSchem_1.default.findOne({ _id: req.params.id });
        res.send(blog);
    }
    catch (_a) {
        res.status(404);
        res.send({ error: "Post doesn't exist!" });
    }
});
//update Blog 
const updateBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blog = yield blogSchem_1.default.findById(req.params.id, {
            title: req.body.title,
            content: req.body.content,
        });
        yield (blog === null || blog === void 0 ? void 0 : blog.save());
        res.send(blog);
    }
    catch (_b) {
        res.status(404);
        res.send({ error: "Post doesn't exist!" });
    }
});
// delete Blog 
const deleteBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield blogSchem_1.default.deleteOne({ _id: req.params.id });
        res.status(204).send();
    }
    catch (_c) {
        res.status(404);
        res.send({ error: "Post doesn't exist!" });
    }
});
exports.default = { GetAllblog, newBlog, singleBlog, updateBlog, deleteBlog };
