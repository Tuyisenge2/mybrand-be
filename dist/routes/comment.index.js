"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const comment_routes_1 = __importDefault(require("./comment.routes"));
const apiRouter = express_1.default.Router();
apiRouter.use("/Blogs/:id/", comment_routes_1.default);
exports.default = apiRouter;
