
import mongoose from "mongoose";
const schema = mongoose.Schema;
const querriesScheme = new schema(
  {
    email:{
      type:String,
      required:true,    
    },
    message: {
      type: String,
      required: true,
    },
  
  },
  { timestamps: true }
);

export default mongoose.model("Querries",querriesScheme);