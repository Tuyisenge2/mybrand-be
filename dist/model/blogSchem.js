"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    title: {
        type: String,
        unique: true
    },
    summary: String,
    description: String,
    commentArray: {
        type: [String]
    },
    likesArray: {
        type: [String]
    }
});
//  module.exports = mongoose.model("Post", schema)
exports.default = mongoose_1.default.model("BLog", schema);
