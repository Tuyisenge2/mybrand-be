"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const signup_middlewares_1 = __importDefault(require("../middlewares/signup.middlewares"));
const userRout = express_1.default.Router();
userRout.post("/signup", signup_middlewares_1.default, user_controller_1.default.addUser);
userRout.get("/login", user_controller_1.default.loginUser);
exports.default = userRout;
