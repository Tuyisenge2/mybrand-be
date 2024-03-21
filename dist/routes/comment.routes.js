"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authorization_1 = require("../middlewares/authorization");
const comRouter = express_1.default.Router();
const comment_controller_1 = __importDefault(require("../controllers/comment.controller"));
comRouter.post("/:id/comments", authorization_1.isUSerLoggedIn, comment_controller_1.default.newComment);
//getAllComment on blog
comRouter.get("/:id/comments", comment_controller_1.default.getAllComment);
//getSinglecomments
comRouter.get("/comments/:id", comment_controller_1.default.getSingleComment);
exports.default = comRouter;
