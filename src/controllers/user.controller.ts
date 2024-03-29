import userScheme from "../model/userScheme";
import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import { hash } from 'bcrypt';
import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
import { Request, Response } from "express";


// Controller function to add a new user

 const addUser = async (req:Request, res:Response) => {
    try {
    const { firstname, lastname, email, password, dateOfBirth, gender,Role } = req.body;

        const existingUser = await userScheme.findOne({ email });
        if (existingUser) {
            return res.status(400).
            json({  
                message: 'Email is already registered'
             });
        }
        const salt=await bcrypt.genSalt(10)
const hashedPass=await  bcrypt.hash(password,salt);
        const newUser = new userScheme({
            firstname,
            lastname,
            email,
            password:hashedPass, 
            dateOfBirth,
            gender,
            Role
        });
        await newUser.save();

       return res.status(201).json({ 
            message: 'User created successfully'
          });

    } catch (error) {
        console.error('Error adding user:', error);
        res.status(500).json({ 
            message: 'Internal server error' 
    
    });
    }
};



// Controller function for user login
 const loginUser = async (req:Request, res:Response) => {
    try {
        const { email, password } = req.body;

        

   
        //!user||user.password===null||user.password===undefined
         
        if(password===null||password===undefined||email===null||email===undefined)
        {  
             return res.status(400).json({
                message:"an empty filled to fill "
            })
        }
        const user = await userScheme.findOne({ email });

      if(user?.password===null||user?.password===undefined) {
    return res.status(404).json({
         message: 'User not found' 
        });
}

const existingToken = req.headers.authorization;

if (existingToken) {
    try {
        const decoded = jwt.verify(existingToken, 'eonfeinefiueriu');

         if (decoded) {
             return res.status(409).json({
                message: 'Conflict occured'
            });
        } else {
         }
    } catch (error) {

        return res.status(500).json({
            message: 'internal server error'
        });

    }}



const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        const token =  jwt.sign({ id: user._id,Role:user.Role }, process.env.JWT_SECRET || " ", { expiresIn: '30min' });
   
        if (!token) {
            throw new Error('Failed to generate token');
        }
         return res.status(200).json( {
            message:"log in successfull",
            token: token
           
        } );
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


export  default {addUser,loginUser};