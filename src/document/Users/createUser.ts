export default {
    post: {
        tags: ["Users"],
        description: "Add new User",
        operationId: "addUser",
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            firstname: { type: "string" },
                            lastname: { type: "string" },
                            dateOfBirth: { type: "string" },
                            gender: { type: "string" },
                            email: { type: "string", format: "email" },
                            password: { type: "string", minLength: 8 },
                        },
                        required: ["firstname","lastname","dateOfBirth","gender","email","password"],
                    },
                },
            },
        },
        responses: {
            "201": {
                description: "User created successfully",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/User",
                        },
                    },
                },
            },
            "409": {
                description: "conflict",
                content: {
                    "application/json": {
                        example: {
                            message: "conflict",
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