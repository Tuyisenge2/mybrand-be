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
            },
            "500": {
                description: "Internal Server Error",
                content: {
                    "multipart/form-data": {
                        example: {
                            message: "Server error",
                               },
                    }
                }
                //
            },
        },
    },
    }