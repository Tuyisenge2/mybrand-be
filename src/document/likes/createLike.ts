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