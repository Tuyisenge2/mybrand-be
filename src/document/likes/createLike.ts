export default {
    post: {
        tags: ["Likes"],
        description: "create Like",
        operationId: "newLikes",
        security: [
            {
              BearerAuth: [],
            },
          ],
          parameters:[
            {
                name:"id",
                in:"path",
                schema:{
                    type:"string"
                },
                required:true
            }
        ],
        requestBody: {
            content: {
                "application/json": {
                  
                },
            },
        },
        responses: {
            "201": {
                description: "like added successfully",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/likeModel",
                        },
                    },
                },
            },
            "400": {
                description: "invalid id",
                content:{
                    "application/json":{
                        example:{
               error: "invalid id!"                         }
                    }
                }
            },
            "404": {
                description: "Bad Request",
                content: {
                    "application/json": {
                        example: {
                            message:"Blog not found"
                        },
                    },
                },
            },
            "500": {
                description: "Internal Server Error",
                content: {
                    "application/json": {
                        example: {
                            message:"server error",
                        },
                    },
                },
            },
        },
    },
    
};