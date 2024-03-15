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
const querries_mode_1 = __importDefault(require("../model/querries.mode"));
//Get all querries
const GetAllQuerries = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const querries = yield querries_mode_1.default.find();
        res.send(querries);
    }
    catch (error) {
        // Handle errors appropriately
        res.status(500).send({ error: 'An error occurred while fetching querries' });
    }
});
//Create querries
const newQuerries = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const querries = new querries_mode_1.default({
        email: req.body.email,
        message: req.body.message,
    });
    yield querries.save();
    res.send(querries);
});
//Get individual querries
const singleQuerries = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const querries = yield querries_mode_1.default.findOne({ _id: req.params.id });
        res.send(querries);
    }
    catch (_a) {
        res.status(404);
        res.send({ error: " doesn't exist!" });
    }
});
exports.default = { GetAllQuerries, newQuerries, singleQuerries };
