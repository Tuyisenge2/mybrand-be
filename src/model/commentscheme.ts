import mongoose from "mongoose";

const schema = mongoose.Schema;

const commentScheme = new schema(
  {
    User:{
      type:String,
      required:true,    
    },
    comment: {
      type: String,
      required: true,
    },
     blogId : {
      type: mongoose.Types.ObjectId,
      ref:"Blog"
    },
  },
  { timestamps: true }
);

export default mongoose.model("Comment", commentScheme);