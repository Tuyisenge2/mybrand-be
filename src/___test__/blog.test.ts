import request from 'supertest';

import { mongoConnect,mongoDisconnect,testConnect,testDisconnect } from '../services/mongodb';
import { unexistingBlog,existingUserData,userDataSignUpgenerate ,userTocreateBlog, userTocreateBlogLogin,userNotFound ,BlogData,userTocreateBlogToken} from '../mock/static';
import { Jwt } from 'jsonwebtoken';
import jwt from "jsonwebtoken";

import app from '../app';
import blogSchem from '../model/blogSchem';
import userScheme from '../model/userScheme';
import mongoose from 'mongoose';
import path = require('path');
import fs from "fs";
import { string } from 'joi';

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
    describe("login user" ,()=>{
      beforeEach(()=>{
        token =  jwt.sign({ id: userTocreateBlogToken._id,Role:userTocreateBlogToken.Role }, process.env.JWT_SECRET || " ", { expiresIn: '30min' });
      })

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

describe("login user" ,()=>{
  let existingBlog:any;
  beforeEach(async()=>{
    existingBlog = new blogSchem({
      title: "Example Blog",
      description: "This is an example blog",
      summary: "summary of update",
      blogImage: "test.jpeg"
    });
    await existingBlog.save();
    token =  jwt.sign({ id: userTocreateBlogToken._id,Role:userTocreateBlogToken.Role }, process.env.JWT_SECRET || " ", { expiresIn: '30min' });
  })

  test("it should return 201 and blog created",async()=>{

    const filePath = path.join(__dirname, "test.jpg");
    if (!fs.existsSync(filePath)) {
      throw new Error("Test file not found");
    }
  const response = await request(app)
  .post('/api/blogs/')
   .set("Authorization",`${token}`)
   .field("title",BlogData.title as string)
   .field("summary",BlogData.summary as string)
   .field("description",BlogData.description as string)
     .attach("blogImage",filePath as string)
   .expect(201)
 
})

test("it should return 200 and update blog",async()=>{

  const updateData = {
    title: "Updated Title",
    description: "Updated Description",
   summary:"summary"
 };

 const filePath = path.join(__dirname, "update.jpg");
 if (!fs.existsSync(filePath)) {
    throw new Error("Test image file not found");
 }

 const response = await request(app)
    .patch(`/api/blogs/${existingBlog._id}`)
    .set("Authorization", `${token}`)
    .field("title", updateData.title)
    .field("description", updateData.description)
    .field("summary", updateData.summary)
    .attach("blogImage", filePath)
    .expect(200)


})
  
})


  
  


 })



