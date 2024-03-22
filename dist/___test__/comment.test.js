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
const supertest_1 = __importDefault(require("supertest"));
const mongodb_1 = require("../services/mongodb");
const static_1 = require("../mock/static");
const app_1 = __importDefault(require("../app"));
const blogSchem_1 = __importDefault(require("../model/blogSchem"));
const userScheme_1 = __importDefault(require("../model/userScheme"));
const commentscheme_1 = __importDefault(require("../model/commentscheme"));
let token;
let id;
describe("comment Api ", () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, mongodb_1.testConnect)();
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield commentscheme_1.default.deleteMany();
        yield blogSchem_1.default.deleteMany();
        yield userScheme_1.default.deleteMany();
        yield (0, mongodb_1.testDisconnect)();
    }));
    describe("comment All end Points", () => {
        test('It should return signup and login', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield (0, supertest_1.default)(app_1.default)
                .post('/api/users/signup')
                .send(static_1.userTocommentBlog)
                .expect(201);
            const responseLogin = yield (0, supertest_1.default)(app_1.default)
                .post('/api/users/login')
                .send(static_1.userTocommentBlogLogin)
                .expect(200);
            expect(responseLogin.body.token).toBeDefined();
            token = responseLogin.body.token;
        }));
    });
});
