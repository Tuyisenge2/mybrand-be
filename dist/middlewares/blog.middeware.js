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
exports.isValid = exports.isTitleUsed = void 0;
const BlogValid_1 = __importDefault(require("../validations/BlogValid"));
const blogSchem_1 = __importDefault(require("../model/blogSchem"));
const isTitleUsed = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //        const blog = await Blog.findOne({ _id: req.params.id });
    const { title, summary, description } = req.body;
    const blog = yield blogSchem_1.default.findOne({ title: title });
    if (blog) {
        return res.status(400).json({
            status: 400,
            message: "title was already used"
        });
    }
    try {
        next();
    }
    catch (error) {
        console.log('error', error);
    }
});
exports.isTitleUsed = isTitleUsed;
const isValid = (req, res, next) => {
    const { error } = (0, BlogValid_1.default)(req.body);
    if (error)
        return res.status(400).json({ message: error.details[0].message });
    try {
        next();
    }
    catch (error) {
        console.log('error', error);
    }
};
exports.isValid = isValid;
