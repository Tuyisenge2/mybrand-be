"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const querries_controller_1 = __importDefault(require("../controllers/querries.controller"));
const QuerriesRouter = express_1.default.Router();
QuerriesRouter.post("/querries", querries_controller_1.default.newQuerries);
QuerriesRouter.get("/querries/:id", querries_controller_1.default.singleQuerries);
QuerriesRouter.get("/querries", querries_controller_1.default.GetAllQuerries);
exports.default = QuerriesRouter;
