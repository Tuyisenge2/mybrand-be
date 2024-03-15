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
exports.getBlogLikes = exports.createBlogLike = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Bloglike_1 = __importDefault(require("../model/Bloglike"));
const blogSchem_1 = __importDefault(require("../model/blogSchem"));
// Controller function to create a like for a blog
const createBlogLike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogid = req.params.id;
        if (!mongoose_1.default.Types.ObjectId.isValid(blogid)) {
            return res.status(400).json({ message: "Invalid blog ID" });
        }
        const blog = yield blogSchem_1.default.findById(blogid);
        if (!blog) {
            return res.status(404).json({
                message: "Blog not found"
            });
        }
        const like = new Bloglike_1.default({
            blogId: blogid,
        });
        const savedLike = yield like.save();
        return res.status(201).json({ message: "Like created successfully", data: like });
    }
    catch (Error) {
        console.error(Error);
        return res.status(500).json({ message: "Internal server error", error: Error });
    }
});
exports.createBlogLike = createBlogLike;
const getBlogLikes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogId = req.params.id;
        if (!mongoose_1.default.Types.ObjectId.isValid(blogId)) {
            return res.status(400).json({ message: "Invalid blog ID" });
        }
        const likes = yield Bloglike_1.default.find({ blogId: blogId });
        return res.status(200).json({ message: "Likes retrieved successfully", data: likes });
    }
    catch (Error) {
        console.error(Error);
        return res.status(500).json({ message: "Internal server error", error: Error });
    }
});
exports.getBlogLikes = getBlogLikes;
