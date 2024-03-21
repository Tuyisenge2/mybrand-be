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
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({
                message: "you must login please"
            });
        }
        const verifyAccessToken = (data) => {
            return jsonwebtoken_1.default.verify(String(data), "eonfeinefiueriu");
        };
        const decoded = verifyAccessToken(token);
        if (decoded) {
            req.userId = decoded.id;
            const id = req.userId;
            console.log(id);
            const user = yield userScheme_1.default.findById(id);
            console.log(user);
            if (!user) {
                return res.status(409).json({
                    message: "user not found"
                });
            }
            console.log(user.Role);
            if (user.Role !== "Admin") {
                next();
            }
        }
    }
    catch (error) {
        return res.status(400).json({
            message: "bad request for real"
        });
    }
});
exports.checkAdmin = checkAdmin;
const isUSerLoggedIn = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({
            massage: "you must login please"
        });
    }
    try {
        const verifyAccessToken = (data) => {
            return jsonwebtoken_1.default.verify(String(data), "eonfeinefiueriu");
        };
        const decoded = verifyAccessToken(token);
        if (decoded) {
            req.userId = decoded.id;
            const id = req.userId;
            console.log(id);
            const user = yield userScheme_1.default.findById(id);
            console.log(user);
            if (!user) {
                return res.status(409).json({
                    message: "user not found"
                });
            }
            console.log(user.Role);
            if (user.Role) {
                next();
            }
        }
    }
    catch (error) {
        return res.status(400).json({
            message: "bad request for real"
        });
    }
});
exports.isUSerLoggedIn = isUSerLoggedIn;
