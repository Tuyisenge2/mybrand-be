import mongoose, { mongo } from "mongoose";

const blogLikeScheme= new mongoose.Schema({
  
    blogId: {
        type: String,
        ref:"Blog"
      }

});

export default mongoose.model("likeModel" , blogLikeScheme)
