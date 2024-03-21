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
const app_1 = __importDefault(require("../app"));
// jest.setTimeout(10000);
describe('Blogs Api', () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, mongodb_1.testConnect)();
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, mongodb_1.testDisconnect)();
    }));
    describe("Welcome API Message", () => {
        test("it should return 200 and welcome", () => __awaiter(void 0, void 0, void 0, function* () {
            const { body } = yield (0, supertest_1.default)(app_1.default)
                .get('/api')
                .expect('content-Type', /json/)
                .expect(200);
            expect(body.message).toStrictEqual('warm welcome on my portfolio');
        }));
        test('It should return 200 and list of all Blogs', () => __awaiter(void 0, void 0, void 0, function* () {
            const { body } = yield (0, supertest_1.default)(app_1.default)
                .get('/api/blogs')
                .expect(200);
            expect(body.message).toStrictEqual('success');
            expect(body.blog).toBeDefined();
        }));
    });
});
//   describe('Welcome API message', () => {
//     test('it should return 200 and welcome message ', async () => {
//       const { body } = await request(app)
//         .get('/api/v1')
//         .expect('Content-Type', /json/)
//         .expect(200);
//       expect(body.message).toStrictEqual('Welcome to the movie API');
//     });
//     test('It should return 200 and list of all movies', async () => {
//       const { body } = await request(app).get('/api/v1/movie').expect(200);
//       expect(body.message).toStrictEqual('success');
//       expect(body.data).toBeDefined();
//     });
//     test('it should return 201 and list of all movies', async () => {
//       const { body } = await request(app)
//         .post('/api/v1/movie')
//         .send(movieData)
//         .expect('Content-Type', /json/)
//         .expect(201);
//       expect(body.message).toStrictEqual('Movie created');
//       expect(body.data.title).toStrictEqual(movieData.title);
//     });
//     test('it should return 400 for empty title', async () => {
//       const { body } = await request(app)
//         .post('/api/v1/movie')
//         .send(movieWithoutTitle)
//         .expect('Content-Type', /json/)
//         .expect(400);
//     });
//     test('it should return 400 for empty director', async () => {
//       const { body } = await request(app)
//         .post('/api/v1/movie')
//         .send(movieWithoutDirector)
//         .expect('Content-Type', /json/)
//         .expect(400);
//     });
//   });
// });
