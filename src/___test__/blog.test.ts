import request from 'supertest';

import { mongoConnect,mongoDisconnect,testConnect,testDisconnect } from '../services/mongodb';
import { unexistingBlog,existingUserData,userDataSignUpgenerate ,userTocreateBlog, userTocreateBlogLogin,userNotFound ,BlogData,userTocreateBlogToken} from '../mock/static';
import { Jwt } from 'jsonwebtoken';
import jwt from "jsonwebtoken";

import app from '../app';
import commentscheme from '../model/commentscheme';
import blogSchem from '../model/blogSchem';
import userScheme from '../model/userScheme';
import mongoose from 'mongoose';
import path = require('path');
import fs from "fs";
import { string } from 'joi';

let token:string;
let id:string;

jest.setTimeout(20000);

describe('Blogs Api', () => {
  beforeAll(async () => {
    await testConnect();
  });

  afterAll(async () => {
    await commentscheme.deleteMany();
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
       // token =  jwt.sign({ id: userTocreateBlogToken._id,Role:userTocreateBlogToken.Role }, process.env.JWT_SECRET || " ", { expiresIn: '30min' });
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

  token=responseLogin.body.token;
console.log(token);
  });
})

describe("login user" ,()=>{
  let existingBlog:any;
  let newBlog:any;
  beforeEach(async()=>{
  //token =  jwt.sign({ id: userTocreateBlogToken._id,Role:userTocreateBlogToken.Role }, process.env.JWT_SECRET || " ", { expiresIn: '30min' });
    newBlog={
      title: "new Blog",
      description: "This is an example blog",
      summary: "summary of update",
      blogImage: "test.jpg"
    }
  })

  test("it should return 400 and insert the Image",async()=>{
  
    const filePath = null as any;
  const response = await request(app)
  .post('/api/blogs/')
   .set("Authorization",`${token}`)
   .attach("blogImage",filePath as string)
   .expect(400)
 
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
   id=response.body.blog._id;
 
})

test("it should return 404 and blog doesn't exist",async()=>{
  const response = await request(app)
  .get(`/api/blogs/${unexistingBlog}`)
   .expect(404)
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
    .patch(`/api/blogs/${id}`)
    .set("Authorization", `${token}`)
    .field("title", newBlog.title)
    .field("description", newBlog.description)
    .field("summary", newBlog.summary)
    .attach("blogImage", filePath)
    .expect(200)
})


test("it should return 204 and blog deleted successfully",async()=>{
  const response = await request(app)
.delete(`/api/blogs/${id}`)
.set("Authorization",`${token}`)
.expect(204)
})
  

})



  
  


 })



