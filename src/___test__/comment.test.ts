import request from 'supertest';

import { testConnect,testDisconnect } from '../services/mongodb';
import { unexistingBlog,existingUserData, userTocommentBlog, userTocommentBlogLogin,userNotFound ,BlogData} from '../mock/static';

import app from '../app';
import blogSchem from '../model/blogSchem';
import userScheme from '../model/userScheme';
import commentscheme from '../model/commentscheme';
import path = require('path');
import fs from "fs";
import mongoose from 'mongoose';

let token:string;
let id:string;
const invalidId="oiinoc1be7non2knof2";
const BlogNotFoundId="65f45895a6ec1be7bee22ef2";
jest.setTimeout(12000);

describe("comment Api ",()=>{

    beforeAll(async () => {
        await testConnect();
      });
    
      afterAll(async () => {
        await commentscheme.deleteMany();
        await blogSchem.deleteMany();
        await userScheme.deleteMany();
        await testDisconnect();
      });
 describe("comment All end Points",()=>{
    test('It should return signup and login', async () => {
        const response = await request(app)
          .post('/api/users/signup')
          .send(userTocommentBlog)
          .expect(201);  
    
          const responseLogin = await request(app)
          .post('/api/users/login')
          .send(userTocommentBlogLogin)
          .expect(200);
          expect(responseLogin.body.token).toBeDefined() 
        token = responseLogin.body.token;
    
    });  
    test("it should return 201 and blog created",async()=>{

      const filePath =await path.join(__dirname, "test.jpg");
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
    test('it should return invalid id',async()=>{
      const response=await request(app)
      .post( `/api/blogs/${invalidId}/comments`)
      .set("Authorization",`${token}`)
      .expect(400)

      console.log(response.body)

    })


test("it should return 404 and blog not found",async()=>{
  const response = await request(app)
.post(`/api/blogs/${BlogNotFoundId}/comments`)
.set("Authorization",`${token}`)
.expect(404)

})


test("it should return 201 and comment created successfully",async()=>{
  const response = await request(app)
.post(`/api/blogs/${id}/comments`)
.set("Authorization",`${token}`)
.expect(201)

})



 })

})