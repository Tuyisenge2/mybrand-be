import  Express  from "express";
import addUser from "../controllers/user.controller";
import isValid from "../middlewares/signup.middlewares";

const userRout= Express.Router();


userRout.post("/signup",isValid,addUser.addUser);
userRout.post("/login",addUser.loginUser);


export  default userRout;