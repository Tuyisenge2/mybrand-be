
import mongoose from "mongoose"

export const blogStatic = {
    title:"Blog 1",
    summary:"Summatization",
    description:"describing the blog",
    commentArray:{"user":"id"},
    likesArray:{"user":"liked"}  
  }
  
 export const commentStatic =  {
      User: "user 1",
      comment:"comment 1",
       blogId : "the user id",
     }


    export const querriesStatic = {
          email:"user email",
          message:"message"
          }
 export const userDataSignUp = {
firstname: "boy",
lastname: "Admine54",
email: "smallhjhboj1@gmail.com",
password:"123ABCDEFg",
dateOfBirth: "2003",
gender: "other",
Role:"Admin"
}
     export const userTocreateBlog={

      firstname: "boydf",
      lastname: "AdmdinJe54",
      email: "tuyisJej1@gmail.com",
      password:"12123ABCDEFg",
      dateOfBirth: "200d3",
      gender: "other",
      Role:"Admin"
      
     }
     export const userTocreateBlogLogin={
      email: "tuyisJej1@gmail.com",
      password:"12123ABCDEFg"   

     }
//


export const userTocommentBlog={

  firstname: "boydf",
  lastname: "AdmdinJe54",
  email: "tuyissJej1@gmail.com",
  password:"12123ABCDEFg",
  dateOfBirth: "200d3",
  gender: "other",
  Role:"Admin"
  
 }
 export const userTocommentBlogLogin={
  email: "tuyissJej1@gmail.com",
  password:"12123ABCDEFg" 

 }



//

 export const userDataLogin = {
  email: "smallhjhboj1@gmail.com",
password:"123ABCDEFg"
}



export const existingUserData = {
  email: "smallhjhboj1@gmail.com"
  }

  export const userNotFound={
    email:"erice@gmail.com",
    password:"jfdbjhbSE12"
  }

  export const BlogData={
    title:"first blog",
    summary: "summarization",
    description:"my descrption"
  }


  export const unexistingBlog: mongoose.Types.ObjectId = new mongoose.Types.ObjectId('65eeb8c9abc95f27dbbd2b5d');
