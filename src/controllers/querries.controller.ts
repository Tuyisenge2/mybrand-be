import Querries from "../model/querries.mode";
import Express from "express";


//Get all querries
const GetAllQuerries =  async (req: Express.Request, res: Express.Response) => {
    try {
        
        const querries = await Querries.find();
        res.send(querries);

      } catch (error) {
        // Handle errors appropriately
        res.status(500).send({ error: 'An error occurred while fetching querries' });
      }
  
  }
  
//Create querries

const newQuerries = async ( req: Express.Request, res: Express.Response) => {
    const querries = new Querries( {
        email: req.body.email,
        message:req.body.message,
    })
    await querries.save()
    res.send(querries)
}

//Get individual querries

const singleQuerries= async (req: Express.Request, res: Express.Response) => {
    try {
        const querries = await Querries.findOne({ _id: req.params.id })
        res.send(querries)
    } catch {
        res.status(404)
        res.send({ error: " doesn't exist!" })
    }
}

export default {GetAllQuerries,newQuerries,singleQuerries};