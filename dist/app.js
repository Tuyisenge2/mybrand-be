"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./routes/index")); // new
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); // new
app.use("/api", index_1.default); // new
app.use('/api', (req, res) => {
    res.status(200).json({
        message: "warm welcome on my portfolio"
    });
});
exports.default = app;
