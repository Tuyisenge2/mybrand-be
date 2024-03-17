//const app=require("./app.js");
import app from './app'
import mongodb from './services/mongodb';
const startServer = async () => {
  await mongodb.mongoConnect();

  app.listen(5000, () => {
    console.log('server is listening ..... 5000');
  });
};
startServer();
