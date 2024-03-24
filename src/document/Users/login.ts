export default {
    post:{
        tags: ["Users"],
        description: "Login of user",
        operationId: "loginUser",
        parameters: [],
        requestBody: {
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        properties:{
                            email:{type:"string",format:"email", example:"user@gmail.com", description:"Enter your email"},
                            password:{type:"string", example:"strong password"}
                        },
                        required:["email","password"]
                    }
                }
            }
     
    },
    responses: {
        "200": {
            description: "log in successfull",
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/Users",
                    },
                },
            },
        },
        "400": {
            description: "Bad Request",
            content: {
                "application/json": {
                    example: {
                        message: "an empty filled to fill",
                    },
                },
            },
        },
        "500": {
            description: "Internal Server Error",
            content: {
                "application/json": {
                    example: {
                         message: "internal server error",
                    },
                },
            },
        },
    },
},
}