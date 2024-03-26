//const app=require("./app.js");
import app from './app'
import {mongoConnect,testConnect } from './services/mongodb';

const startServer = async () => {
  await mongoConnect();

  const port=process.env.PORT || 5000

  app.listen(port, () => {
    console.log('server is listening ..... 5000');
  });
};
startServer();
