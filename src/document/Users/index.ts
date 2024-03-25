import createUser from "./createUser";
import login from "./login";
import createBlog from "../Blogs/createBlog";
import getblogs from "../Blogs/getblogs";
import updateBlog from "../Blogs/updateBlog";
import deleteBlog from "../Blogs/deleteBlog";
import createcomment from "../comment/createcomment";
import createQuerries from "../querries/createQuerries";
import createLike from "../likes/createLike";
import getAllCommentOnBlog from "../comment/getAllCommentOnBlog";

import getAllLikeOnBlog from "../likes/getAllLikeOnBlog";
import getAllQuerries from "../querries/getAllQuerries";

export default {

    paths: {

        '/api/users/signup': {
            ...createUser
        },

        '/api/users/login': {
            ...login
        },
        '/api/blogs/': {
            ...createBlog,
            ...getblogs
                 
        },
        '/api/blogs/{id}': {
            ...updateBlog,
            ...deleteBlog  
        },
        '/api/blogs/{id}/comments': {
            ...createcomment,     
            ...getAllCommentOnBlog         
        },
        '/api/querries/': {
            ...createQuerries,
            ...getAllQuerries
            
        },
        '/api/blogs/{id}/likes': {
            ...createLike,
            ...getAllLikeOnBlog              
        },
            
    },
};