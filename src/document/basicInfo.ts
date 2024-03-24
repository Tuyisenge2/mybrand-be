export default {
    openapi: "3.0.3",
    info: {
      title: " BackEnd Api",
      description: " Documentation for the Express API endpoints", 
      version: "1.0.0", 
      contact: {
        name:"Tito Tuyisenge"
      },
    },
    components: {
      securitySchemes: {
        BearerAuth: {
          type: "apiKey",
          scheme: "bearer",
          bearerFormat: "JWT",
          name: "Authorization",
          in: "header",
        },
      },
    },
  };