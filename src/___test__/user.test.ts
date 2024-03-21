import request from 'supertest';

import { mongoConnect,mongoDisconnect,testConnect,testDisconnect } from '../services/mongodb';
import { existingUserData, userDataLogin, userDataSignUp,userNotFound } from '../mock/static';
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

    await userScheme.deleteMany();
    await testDisconnect();
  });


  

    describe('userSignUp',()=>{
        test("it should return 404 and userNotFoun ",async ()=>{
            const response = await request(app)
            .post('/api/users/login')
            .send(userNotFound)
            .expect(404)
        })
        
  
      
test("it should return 400 and existing user ",async ()=>{
    const response = await request(app)
    .post('/api/users/signup')
    .send(existingUserData)
    .expect(400)
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
    token = responseLogin.body.token;

});  



test("it should return 409 and user is logged in",async ()=>{
  const response = await request(app)
  .post('/api/users/login')
  .send(userDataLogin)
  .set("Authorization",`${token}`)
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

