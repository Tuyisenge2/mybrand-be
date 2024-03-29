export default {
    post: {
        tags: ["Comments"],
        description: "create comment",
        operationId: "createComment",
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
                    schema: {
                        type: "object",
                        properties: {
                             comment: { type: "string" }                            
                        },
                        required: ["comment"],
                    },
                },
            },
        },
        responses: {
            "201": {
                description: "comment added successfully",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Comment",
                        },
                    },
                },
            },
            "400": {
                description: "invalid id",
                content:{
                    "application/json":{
                        example:{
               error: "invalid id!"                         }
                    }
                }
            },
            "404": {
                description: "Bad Request",
                content: {
                    "application/json": {
                        example: {
                            message:"Blog not found"
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