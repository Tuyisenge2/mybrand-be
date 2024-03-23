

import mongoose from "mongoose";

    
mongoose.connection.on('error', (err) => {
  console.error('Database connection error:', err);
});

    mongoose.connection.on('open', () => {
        console.info('Database connected');
      });
      
      mongoose.connection.on('close', () => {
        console.info('something went wrong');
      });
      
      
      //  mongodb://localhost:27017/myBlogs
//  mongodb+srv://tuyisengetito3:h6uClMgz6FiBszui@cluster0.wk1xsou.mongodb.net/
//second datsbase
// mongodb+srv://tuyisengetito3:Tuyisenge9000@cluster0.vkurfpk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 

//mongodb://localhost:27017/testingDb
//mongodb+srv://tuyisengetito3:h6uClMgz6FiBszui@cluster0.wk1xsou.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

//third dataabse

//mongodb+srv://Tito:Tuyisenge9000@cluster0.vkurfpk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
      const mongoConnect = async () => {


        try {
          await mongoose.connect('mongodb+srv://tuyisengetito3:h6uClMgz6FiBszui@cluster0.wk1xsou.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0')
          console.log("myblogs test is connected");
      } catch (error) {
          console.error('Error connecting to MongoDB:', error);
         
      }
 

      };

      const mongoDisconnect = async () => {
        try {
            await mongoose.disconnect();
            console.log("Disconnected myBlogs from MongoDB");
        } catch (error) {
            console.error('Error disconnecting from MongoDB:', error);
        }
    };
    
    const testConnect = async () => {
        try {
            await mongoose.connect('mongodb+srv://tuyisengetito3:h6uClMgz6FiBszui@cluster0.wk1xsou.mongodb.net/testDatabase?retryWrites=true&w=majority&appName=Cluster0');
  
        } catch (error) {
            console.error('Error connecting to test MongoDB:', error);
          
        }
    };
    
    const testDisconnect = async () => {
        try {
            await mongoose.disconnect();
            console.log("Disconnected test from test MongoDB");
        } catch (error) {
            console.error('Error disconnecting from test MongoDB:', error);
         
        }
    };
    
    export {
        mongoConnect,
        mongoDisconnect,
        testConnect,
        testDisconnect
    };
