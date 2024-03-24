export default {
    delete:{
        tags: ["Blogs"],
        description: "Delete user",
        operationId: "deleteUser",
        security: [
            {
              BearerAuth: [],
            },
          ],
        parameters: [
            {
                name: "id",
                in: "path",
                schema: {
                    type: "string",
                },
                required: true,
            },
        ],
        responses: {
            "200": {
                description: "delete Blog",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Blog",
                        },
                    },
                },
            },
            "404": {
                description: "blog was not found",
                content:{
                    "application/json":{
                        example:{
               error: "Blog doesn't exist!"                         }
                    }
                }
            },
            "500":{
                description:"internal server error",
                content:{
                    "application/json":{
                        example:{
             error: "Internal Server Error"                        }
                    }
                }
            }
        },

    },
    }