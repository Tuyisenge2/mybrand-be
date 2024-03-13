"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const BlogScheme = joi_1.default.object({
    title: joi_1.default.string().required(),
    summary: joi_1.default.string().required(),
    description: joi_1.default.string().required(),
});
const validateBlog = (blog) => {
    return BlogScheme.validate(blog);
};
//module.exports = validateBlog;
exports.default = validateBlog;
