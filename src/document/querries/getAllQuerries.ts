export default {
    get:{
        tags: ["Querries"],
        description: "Get all Querries",
        operationId: "getAllQuerries",
        responses: {
            "200": {
                description: "success",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Querries",
                        },
                    },
                },
            },  "404": {
                description: "Bad Request",
                content: {
                    "application/json": {
                        example: {
                            message:"Querries  not found"
                        },
                    },
                },
            },
            "500": {
                description: "Internal Server Error",
                content: {
                    "application/json": {
                        example: {
                            error: "An error occurred while fetching querries",
                               },
                    }
                }
                
            },
        },
    },
    }