import request from 'supertest';

import { mongoConnect,mongoDisconnect,testConnect,testDisconnect } from '../services/mongodb';
import { unexistingBlog,existingUserData,userDataSignUpgenerate ,userTocreateBlog, userTocreateBlogLogin,userNotFound ,BlogData} from '../mock/static';
import { Jwt } from 'jsonwebtoken';
import jwt from "jsonwebtoken";

import app from '../app';
import blogSchem from '../model/blogSchem';
import userScheme from '../model/userScheme';
import mongoose from 'mongoose';

let token:string;

let id:mongoose.Types.ObjectId;

describe('Blogs Api', () => {
  beforeAll(async () => {
    await testConnect();
  });

  afterAll(async () => {

    await blogSchem.deleteMany();
    await userScheme.deleteMany();
    await testDisconnect();
  });


  describe("Welcome API Message",()=>{

 token =  jwt.sign({ id: userDataSignUpgenerate._id,Role:userDataSignUpgenerate.Role }, process.env.JWT_SECRET || " ", { expiresIn: '30min' });


test("it should return 200 and welcome",async ()=>{

  const {body}=await request(app) 
     .get('/api')
     .expect('content-Type',/json/)
     .expect(200)
    
     expect(body.message).toStrictEqual('warm welcome on my portfolio')
});

test('It should return 200 and list of all Blogs', async () => {
        const { body } = await request(app)
        .get('/api/blogs')
        .expect(200);
        expect(body.message).toStrictEqual('success');
        expect(body.blog).toBeDefined();
      });
    });

    test('It should return signup and login', async () => {
      const response = await request(app)
        .post('/api/users/signup')
        .send(userTocreateBlog)
        .expect(201);  
  
        const responseLogin = await request(app)
        .post('/api/users/login')
        .send(userTocreateBlogLogin)
        .expect(200);
        expect(responseLogin.body.token).toBeDefined() 
  
  });
  


  
  


 })



