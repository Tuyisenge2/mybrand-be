export default {
    get:{
        tags: ["Likes"],
        description: "Get all Likes",
        operationId: "getAllLikes",
        security: [
            {
              BearerAuth: [],
            },
          ],  parameters:[
            {
                name:"id",
                in:"path",
                schema:{
                    type:"string"
                },
                required:true
            }
        ],
        responses: {
            "200": {
                description: "success",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/likeModel",
                        },
                    },
                },
            }, "404": {
                description: "No likes",
                content: {
                    "application/json": {
                        example: {
                            message: "Blog has zero likes",
                               },
                    }
                }
                
            },
            "500": {
                description: "Internal Server Error",
                content: {
                    "application/json": {
                        example: {
                            message: "Server error",
                               },
                    }
                }
                
            },
        },
    },
    }