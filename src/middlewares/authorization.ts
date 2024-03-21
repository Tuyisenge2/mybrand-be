import { Express, Request, Response } from "express";

import Jwt, { JwtPayload } from "jsonwebtoken";

import userScheme from "../model/userScheme";

const checkAdmin=async(req:Request,res:Response,next:Function)=>{
    try {
        let token = req.headers.authorization;
    
    
        if (!token) {
            return res.status(401).json({
                message: "You must log in."
            });
        }
    
        const decoded = Jwt.verify(token, "eonfeinefiueriu") as any;
    
        const loggedUser = await userScheme.findById(decoded.id);
    
        if (!loggedUser) {
            return res.status(409).json({
                message: "User not found."
            });
        }
    
        if (loggedUser.Role === "Admin") {
            next();
        } else {
            return res.status(403).json({
                message: "Unauthorized access."
            });
        }
    } catch (error) {
        return res.status(400).json({
            message: "Bad request."
        });
    }
    

}



const isUSerLoggedIn=async(req:Request,res:Response,next:Function)=>{
     
        try{

 let token;        
  if(req.headers.authorization &&req.headers.authorization.startsWith("Bearer")){
   token=req.headers.authorization.split(" ")[1];
        
          }
        
            if(!token){
               return res.status(401).json({
                   message:"you must login please"
                });
                  }
                  
                 
          const decoded=Jwt.verify(String(token),"eonfeinefiueriu") as any;
          
          const loggedUser= await userScheme.findById(decoded._id);
          
          if(!loggedUser){
           return res.status(409).json({
                message:"user not found"
            })
        }
        if(loggedUser.Role =="Admin")
        {
        next();
        
        }  



    }catch (error){
        return res.status(400).json(
            {
                message:"bad request for real"
            }
        )
    }

}

export {checkAdmin,isUSerLoggedIn};