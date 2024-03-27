export default {
    get:{
        tags: ["Blogs"],
        description: "Get all blogs",
        operationId: "getAllBlogs",
        responses: {
            "200": {
                description: "success",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Blogs",
                        },
                    },
                },
            }, "404": {
                description: "blog was not found",
                content:{
                    "application/json":{
                        example:{
               error: "Blog doesn't exist!"                         }
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