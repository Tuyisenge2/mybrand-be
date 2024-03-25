import mongoose, { mongo } from "mongoose";
interface likeType {
  [key: string]: any; 
}
const blogLikeScheme= new mongoose.Schema({
  userId:{
    type:String,
     ref:"User"  
  },
    blogId: {
        type: String,
        ref:"Blog"
      }

});

export default mongoose.model("likeModel" , blogLikeScheme)
