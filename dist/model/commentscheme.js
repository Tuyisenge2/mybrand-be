"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = mongoose_1.default.Schema;
const commentScheme = new schema({
    User: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
    blogId: {
        type: mongoose_1.default.Types.ObjectId,
        ref: "Blog"
    },
}, { timestamps: true });
exports.default = mongoose_1.default.model("Comment", commentScheme);