"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Likes_controller_1 = require("../controllers/Likes.controller");
const likeRout = express_1.default.Router();
likeRout.post("/:id/likes", Likes_controller_1.createBlogLike);
likeRout.get("/:id/likes", Likes_controller_1.getBlogLikes);
exports.default = likeRout;
