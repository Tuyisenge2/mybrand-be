"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const querries_routes_1 = __importDefault(require("./querries.routes"));
const express_1 = __importDefault(require("express"));
const querriesRouter = express_1.default.Router();
querriesRouter.use("/querries", querries_routes_1.default);
exports.default = querriesRouter;
