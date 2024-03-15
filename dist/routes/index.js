"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const comment_routes_1 = __importDefault(require("./comment.routes"));
const querries_routes_1 = __importDefault(require("./querries.routes"));
const like_routet_1 = __importDefault(require("./like.routet"));
const user_route_1 = __importDefault(require("./user.route"));
const apiRouter = express_1.default.Router();
apiRouter.use('/blogs', routes_1.default);
apiRouter.use('/blogs', comment_routes_1.default);
apiRouter.use('/blogs', querries_routes_1.default);
apiRouter.use('/blogs', like_routet_1.default);
apiRouter.use('/users', user_route_1.default);
exports.default = apiRouter;
