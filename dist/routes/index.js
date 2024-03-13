"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const apiRouter = express_1.default.Router();
apiRouter.use('/Blogs', routes_1.default);
//module.exports = apiRouter;
exports.default = apiRouter;
