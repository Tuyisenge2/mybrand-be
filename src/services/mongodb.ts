

import mongoose from "mongoose";


    mongoose.connection.on('open', () => {
        console.info('Database connected');
      });
      
      mongoose.connection.on('close', () => {
        console.info('something went wrong');
      });
      
      const mongoConnect = async () => {
        await mongoose.connect('mongodb+srv://tuyisengetito3:h6uClMgz6FiBszui@cluster0.wk1xsou.mongodb.net/');
      };
      const mongoDisconnect = async () => {
        await mongoose.disconnect();
      };
      
      // module.exports = {
      //   mongoConnect,
      //   mongoDisconnect,
      // };

      export default {
        mongoConnect,
        mongoDisconnect,
      };