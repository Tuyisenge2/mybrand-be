  import mongoose from "mongoose";
    
    const schema = new mongoose.Schema({
        title: String,
        summary:String,
        description: String,
        commentArray: [],
    })
    
  //  module.exports = mongoose.model("Post", schema)

  export default mongoose.model("BLog", schema);