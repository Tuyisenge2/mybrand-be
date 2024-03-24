  import mongoose from "mongoose";
    
    const schema = new mongoose.Schema({
        title: {
          type:String,
          unique: true
        },
            summary:String,
        description: String,
        blogImage:String,
        commentArray: {
          type:[]
        },
        likesArray: {
          type: [String]  
      }
    })
    
  //  module.exports = mongoose.model("Post", schema)

  export default mongoose.model("BLog", schema);