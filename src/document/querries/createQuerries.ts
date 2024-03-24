export default {
    post: {
        tags: ["Querries"],
        description: "create new User",
        operationId: "addQuerry",
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                              email: { type: "string", format: "email" },
                              message: { type: "string"}
                        },
                        required: ["email","message"],
                    },
                },
            },
        },
        responses: {
            "201": {
                description: "querries created successfully",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Querries",
                        },
                    },
                },
            },
                     "500": {
                description: "Internal Server Error",
                content: {
                    "application/json": {
                        example: {
                            message: "Internal server error",
                        },
                    },
                },
            },
        },
    },
    
};