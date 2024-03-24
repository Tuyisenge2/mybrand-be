export default {
    post: {
        tags: ["Blogs"],
        description: "create blog",
        operationId: "createBlog",
        security: [
            {
              BearerAuth: [],
            },
          ],
        requestBody: {
            content: {
                "multipart/form-data": {
                    schema: {
                        type: "object",
                        properties: {
                            title: { type: "string" },
                            summary: { type: "string" },
                            description: { type: "string" },
                            blogImage: { type: "string", format: "binary" },
                        },
                        required: ["title", "description","summary","blogImage"],
                    },
                },
            },
        },
        responses: {
            "201": {
                description: "Blog created successfully",
                content: {
                    "multipart/form-data": {
                        schema: {
                            $ref: "#/components/schemas/Blog",
                        },
                    },
                },
            },
            "400": {
                description: "Bad Request",
                content: {
                    "multipart/form-data": {
                        example: {
                            message: "Please upload a file",
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
                    },
                },
            },
        },
    },
    
};