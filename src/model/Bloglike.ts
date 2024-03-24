import mongoose, { mongo } from "mongoose";

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
