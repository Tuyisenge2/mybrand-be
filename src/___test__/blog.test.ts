import request from 'supertest';

import { mongoConnect,mongoDisconnect,testConnect,testDisconnect } from '../services/mongodb';
import { unexistingBlog,existingUserData, userTocreateBlog, userTocreateBlogLogin,userNotFound ,BlogData} from '../mock/static';

import app from '../app';
import blogSchem from '../model/blogSchem';
import userScheme from '../model/userScheme';
import mongoose from 'mongoose';

jest.setTimeout(10000);
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
      token = responseLogin.body.token;
  
  });  
  
test("it should return 201 and blog created",async()=>{
  const response = await request(app)
  .post('/api/blogs/')
   .set("Authorization",`${token}`)
   .send(BlogData)
   .expect(201)

   id=response.body.blog._id;

})

test("it should return 400 and single blog returned",async()=>{
  const response = await request(app)
  .get(`/api/blogs/${id}`)
  .expect(200)
})



test("it should return 200 and blog updated successfully",async()=>{
  const response = await request(app)
.patch(`/api/blogs/${id}`)
.set("Authorization",`${token}`)
.expect(200)
})


test("it should return 404 and blog doesn't exist",async()=>{
  const response = await request(app)
.get(`/api/blogs/${unexistingBlog}`)
.expect(404)
})


test("it should return 204 and blog deleted successfully",async()=>{
  const response = await request(app)
.delete(`/api/blogs/${id}`)
.set("Authorization",`${token}`)
.expect(204)
})



 })



