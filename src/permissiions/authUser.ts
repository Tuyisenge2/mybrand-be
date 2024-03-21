
import { Express, NextFunction, Request, Response } from "express";
const authUser= (req:Request,res:Response,next:NextFunction)=>{
     const {email,password}=  req.body;
  if( !email || !password)
  {
  return res.status(403).json({
        status:403,
        message:"you must login"
    });
  }
  next();

}

export default authUser;
