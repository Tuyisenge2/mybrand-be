"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = __importDefault(require("./routes")); // new
const comment_routes_1 = __importDefault(require("./routes/comment.routes"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); // new
app.use("/api", routes_1.default); // new
app.use("/api", comment_routes_1.default);
exports.default = app;
