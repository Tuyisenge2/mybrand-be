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
exports.isUSerLoggedIn = exports.checkAdmin = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userScheme_1 = __importDefault(require("../model/userScheme"));
const checkAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let token = req.headers.authorization;
        if (!token) {
            console.log("tokeb ", token);
            return res.status(401).json({
                message: "You must log in."
            });
        }
        const decoded = jsonwebtoken_1.default.verify(token, "eonfeinefiueriu");
        const loggedUser = yield userScheme_1.default.findById(decoded.id);
        if (!loggedUser) {
            return res.status(409).json({
                message: "User not found."
            });
        }
        if (loggedUser.Role === "Admin") {
            next();
        }
        else {
            return res.status(403).json({
                message: "Unauthorized access."
            });
        }
    }
    catch (error) {
        return res.status(400).json({
            message: "Bad request."
        });
    }
});
exports.checkAdmin = checkAdmin;
const isUSerLoggedIn = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let token;
        if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
            token = req.headers.authorization.split(" ")[1];
        }
        if (!token) {
            return res.status(401).json({
                message: "you must login please"
            });
        }
        const decoded = jsonwebtoken_1.default.verify(String(token), "eonfeinefiueriu");
        const loggedUser = yield userScheme_1.default.findById(decoded._id);
        if (!loggedUser) {
            return res.status(409).json({
                message: "user not found"
            });
        }
        if (loggedUser.Role == "Admin") {
            next();
        }
    }
    catch (error) {
        return res.status(400).json({
            message: "bad request for real"
        });
    }
});
exports.isUSerLoggedIn = isUSerLoggedIn;
