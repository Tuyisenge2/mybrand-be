import mongoose, { mongo } from "mongoose";

const blogLikeScheme= new mongoose.Schema({
  
    blogId: {
        type: mongoose.Types.ObjectId,
        ref:"Blog"
      }

});

export default mongoose.model("likeModel" , blogLikeScheme)
