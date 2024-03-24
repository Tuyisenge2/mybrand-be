import createUser from "./createUser";

export default {

    paths: {

        '/api/users/signup': {
            ...createUser
        },
          
      
    },
};