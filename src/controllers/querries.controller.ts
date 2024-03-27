import Querries from "../model/querries.mode";
import Express from "express";
import mongoose  from "mongoose";


//Get all querries
const GetAllQuerries =  async (req: Express.Request, res: Express.Response) => {
    try {
        
        const querries = await Querries.find();
       return  res.status(200).json({
        querries:querries,
        status:200
    });

      } catch (error) {
       return res.status(500).json({ 
        error: 'An error occurred while fetching querries'
     });
      }
  
  }
  
//Create querries

const newQuerries = async ( req: Express.Request, res: Express.Response) => {
   
try{   
    const querries = new Querries({
        email: req.body.email,
        message:req.body.message,
    })
    await querries.save()
   return res.status(201).json({
    status:201,
    querries:querries
})
}catch(error){
return res.status(500).json({
    message:"internal server error"

})
}

}

//Get individual querries

const singleQuerries= async (req: Express.Request, res: Express.Response) => {
    try {
        const querries = await Querries.findOne({ _id: req.params.id })
        if(!querries){
            return res.status(404).json({
                message: "Querries not found"
            });
        }
       return res.status(200).json({
        querries:querries
    })
    } catch {
        
    return res.status(500).json({ 
        error: "internal server error" })
    }
}

export default {GetAllQuerries,newQuerries,singleQuerries};