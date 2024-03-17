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
const userScheme_1 = __importDefault(require("../model/userScheme"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// Controller function to add a new user
const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstname, lastname, email, password, dateOfBirth, gender } = req.body;
        const existingUser = yield userScheme_1.default.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email is already registered' });
        }
        const salt = yield bcrypt_1.default.genSalt(10);
        const hashedPass = yield bcrypt_1.default.hash(password, salt);
        const newUser = new userScheme_1.default({
            firstname,
            lastname,
            email,
            password: hashedPass,
            dateOfBirth,
            gender
        });
        console.log(hashedPass);
        yield newUser.save();
        res.status(201).json({ message: 'User created successfully',
        });
    }
    catch (error) {
        console.error('Error adding user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
// Controller function for user login
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield userScheme_1.default.findOne({ email });
        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            });
        }
        if (!user || user.password === null || user.password === undefined) {
            console.log("password is ", password, " and user was ", user);
            return res.status(404).json({
                message: "an empty filled to fill "
            });
        }
        const existingToken = req.headers.authorization;
        if (existingToken) {
            try {
                const decoded = jsonwebtoken_1.default.verify(existingToken, 'eonfeinefiueriu');
                if (decoded) {
                    return res.status(409).json({
                        message: 'User is already logged in'
                    });
                }
                else {
                }
            }
            catch (error) {
                console.log("error", error);
            }
        }
        const isPasswordValid = yield bcrypt_1.default.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }
        const token = yield jsonwebtoken_1.default.sign({ id: user._id }, 'eonfeinefiueriu', { expiresIn: '2min' });
        if (!token) {
            throw new Error('Failed to generate token');
        }
        return res.status(200).json({
            message: "log in successfull",
            token: token
        });
    }
    catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
exports.default = { addUser, loginUser };
