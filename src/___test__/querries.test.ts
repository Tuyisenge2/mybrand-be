import request from 'supertest';
import { testConnect,testDisconnect } from '../services/mongodb';
import querriesMode from '../model/querriesMode';
import app from '../app';
import mongoose from 'mongoose';
 
jest.setTimeout(30000)

describe('querry Api',()=>{
    
describe('Querries Crud operational',()=>{
  beforeAll(async () => {
    await testConnect();
  });

  afterAll(async () => {
   await querriesMode.deleteMany();
    await testDisconnect();
  });


  test('it should return 201 and querries created',async()=>{

  const {body}=await request(app) 
  .post('/api/querries')
  .send(QuerriesData)
  .expect(201)
  expect(body.querries).toBeDefined();
  
})


})



})