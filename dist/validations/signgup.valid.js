"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const SignupSchema = joi_1.default.object({
    firstname: joi_1.default.string().required(),
    lastname: joi_1.default.string().required(),
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$')).required()
        .message('Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one number'),
    dateOfBirth: joi_1.default.string().required(),
    gender: joi_1.default.string().valid('male', 'female', 'other').required()
});
const validateSignup = (user) => {
    return SignupSchema.validate(user);
};
exports.default = validateSignup;
