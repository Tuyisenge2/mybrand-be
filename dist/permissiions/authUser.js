"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authUser = (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(403).json({
            status: 403,
            message: "you must login"
        });
    }
    next();
};
exports.default = authUser;
