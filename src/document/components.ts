import { Schema } from "mongoose";

export default {
    components: {
      securitySchemes: {
        BearerAuth: {
          type: "apiKey",
          scheme: "bearer",
          bearerFormat: "JWT",
          name: "Authorization",
          in: "header",
        },
      },
  
      schemas: {
        User: {
          type: "object",
          properties: {
            firstname: {
              type: "string",
              description: "first names",
              example: "John",
            },
            lastname: {
                type: "string",
                description: "last names",
                example: "John",
              },
            email: {
              type: "string",
              description: "Email address",
              example: "test@gmail.com",
            },
            password: {
              type: "string",
              description: "Password",
              example: "12345678",
            },
            dateOfBirth: {
                type: "string",
                description: "Date",
                example:"2003",
              },
            gender: {
                type: "string",
                description: "first names",
                example:"famale",
                enum: ['male', 'female', 'other'],
                
              },
            role: {
              type: "string",
              description: "Role",
              example: "Admin",
            }
          },
        },
        BlogScheme:{
          type: "object",
          properties:{
            title:{
              type:String,
              unique: true
            },
            summary:{
              type:"string",
              description:"summary"
            },
            description: {
              type:"string",
            description:"descrption"
            },
            blogImage:{
              type:"string",
            description:"ImageUrl"
            },
            commentArray: {
              type:[]
            },
            likesArray: {
              type: []  
          }

          }
        },
          CommentScheme:{
            type: "object",
            properties:{
            User:{
              type:"string",
               ref:"User"  
                 
            },
            comment: {
              type: "string"
              
            },
             blogId : {
              type:"string",
              ref:"Blog"
            }
          }
          },
          QuerriesScheme:{
            type: "object",
          properties:{
            email:{
              type:"string"
            },
            message: {
              type: "string"
            },
          }
          },
   BlogLikesScheme:{
    type: "object",
    properties:{
      blogId: {
        type: "string",
        ref:"Blog"
      }

    }

   }
   ,       Error: {
          type: "object",
          properties: {
            message: {
              type: "string",
              description: "Error message",
              example: "Not found",
            },
            internal_code: {
              type: "string",
              description: "Error internal code",
              example: "Invalid parameters",
            },
          },
        },
      },
    },
  };