import request from 'supertest';

import { testConnect,testDisconnect } from '../services/mongodb';
import { unexistingBlog,existingUserData, userTocommentBlog, userTocommentBlogLogin,userNotFound ,BlogData} from '../mock/static';

import app from '../app';
import blogSchem from '../model/blogSchem';
import userScheme from '../model/userScheme';
import commentscheme from '../model/commentscheme';
import mongoose from 'mongoose';

let token:string;
let id:mongoose.Types.ObjectId;

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





 })

})