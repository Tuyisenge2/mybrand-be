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
exports.testDisconnect = exports.testConnect = exports.mongoDisconnect = exports.mongoConnect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connection.on('error', (err) => {
    console.error('Database connection error:', err);
});
mongoose_1.default.connection.on('open', () => {
    console.info('Database connected');
});
mongoose_1.default.connection.on('close', () => {
    console.info('something went wrong');
});
//  mongodb://localhost:27017/myBlogs
//  mongodb+srv://tuyisengetito3:h6uClMgz6FiBszui@cluster0.wk1xsou.mongodb.net/
const mongoConnect = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect('mongodb://localhost:27017/myBlogs');
        console.log("myblogs test is connected");
    }
    catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
});
exports.mongoConnect = mongoConnect;
const mongoDisconnect = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.disconnect();
        console.log("Disconnected myBlogs from MongoDB");
    }
    catch (error) {
        console.error('Error disconnecting from MongoDB:', error);
    }
});
exports.mongoDisconnect = mongoDisconnect;
const testConnect = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect('mongodb://localhost:27017/testingDb');
    }
    catch (error) {
        console.error('Error connecting to test MongoDB:', error);
    }
});
exports.testConnect = testConnect;
const testDisconnect = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.disconnect();
        console.log("Disconnected test from test MongoDB");
    }
    catch (error) {
        console.error('Error disconnecting from test MongoDB:', error);
    }
});
exports.testDisconnect = testDisconnect;
