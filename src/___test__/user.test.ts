import request from 'supertest';

import { mongoConnect,mongoDisconnect,testConnect,testDisconnect } from '../services/mongodb';
import { existingUserData, userDataLogin, userDataSignUp,userNotFound, userDataSignUpgenerate} from '../mock/static';
import app from '../app';
import bcrypt from 'bcrypt';
import { hash } from 'bcrypt';
import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
import blogSchem from '../model/blogSchem';
import userScheme from '../model/userScheme';
import mongoose from 'mongoose';
jest.setTimeout(12000);

let token:string;
let id:mongoose.Types.ObjectId;
describe('Blogs Api', () => {
  beforeAll(async () => {
    await testConnect();
  });

  afterAll(async () => {

    await userScheme.deleteMany();
    await testDisconnect();
  });

  token =  jwt.sign({ id: userDataSignUpgenerate._id,Role:userDataSignUpgenerate.Role }, process.env.JWT_SECRET || " ", { expiresIn: '30min' });

  

    describe('userSignUp',()=>{


      test("it should return 404 and userNotFoun ",async ()=>{
            const response = await request(app)
            .post('/api/users/login')
            .send(userNotFound)
            .expect(404)
        })


        test('It should return signup and login', async () => {
          const response = await request(app)
            .post('/api/users/signup')
            .send(userDataSignUp)
            .expect(201);  
      
            const responseLogin = await request(app)
            .post('/api/users/login')
            .send(userDataLogin)
            .expect(200);
            expect(responseLogin.body.token).toBeDefined() 
        
      
      });  
      
      test("it should return 409 and user is logged in",async ()=>{
        const response = await request(app)
        .post('/api/users/login')
        .set("Authorization",`${token}`)
        .send(userDataLogin)
        .expect(409)
      
      })


      test("it should return 404 and user not found",async ()=>{
        const response = await request(app)
        .post('/api/users/login')
        .send(userNotFound)
        .expect(404)
      
      })

      })

 })

