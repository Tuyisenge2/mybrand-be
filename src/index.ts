//const app=require("./app.js");
import app from './app'
import {mongoConnect,testConnect } from './services/mongodb';

const startServer = async () => {
  await testConnect();

  app.listen(5000, () => {
    console.log('server is listening ..... 5000');
  });
};
startServer();
