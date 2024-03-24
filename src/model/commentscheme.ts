import { string } from "joi";
import mongoose from "mongoose";

const schema = mongoose.Schema;

const commentScheme = new schema(
  {
    User:{
      type:String,
       ref:"User"  
         
    },
    comment: {
      type: String
      
    },
     blogId :{
      type: String,
      ref:"Blog"
    },
  }
  ,
  { timestamps: true }
);

export default mongoose.model("Comment", commentScheme);