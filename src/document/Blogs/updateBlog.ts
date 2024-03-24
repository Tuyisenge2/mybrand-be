export default {
    patch: {
        tags:["Blogs"],
        description:"Update blogs by Id",
        operationId:"updateBlog",
        security:[
            {
                BearerAuth:[]
            }
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
        requestBody:{
            content:{
                "application/json": {
                    schema:{
                        type:"object",
                        properties:{
                            title:{type:"string", example:" blog title "},
                            summary:{type:"string", example:"blog summmary not beyond 15 words"},
                            description:{type:"string", example:"the general description"},
                        },
                        required:["title", "summary", "description"]
                    },
                },
            },
        },
        responses:{
            "200":{
                description:"Blog was updated",
                content:{
                    "application/json":{
                        schema:{
                            $ref:"#components/schemas/Blog"
                        }
                    }
                }
            },
            "404":{
                description:"Bad Request",
                content:{
                    "application/json":{
                        example:{
                            message:"Blog doesn't exist!"
                        }
                    }
                }
            },
            "500":{
                description:"internal server error",
                content:{
                    "application/json":{
                        example:{
                            status:false,
                            message:"Server Error"
                        }
                    }
                }
            }
        }
    }
}