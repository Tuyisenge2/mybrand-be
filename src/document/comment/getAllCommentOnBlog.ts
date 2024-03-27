export default {
    get:{
        tags: ["Comments"],
        description: "Get all Comments",
        operationId: "getAllBlogs",
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
        responses: {
            "200": {
                description: "success",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Comment",
                        },
                    },
                },
            }, "404": {
                description: "No comment Found",
                content: {
                    "application/json": {
                        example: {
                            message: "Comment not found",
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