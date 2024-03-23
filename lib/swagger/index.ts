import swaggerJsDoc from "swagger-jsdoc";

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API documentation with Swagger",
      version: "0.0.1",
      description: "API documentation",
    },
  },
  apis: ["**/*.ts"],
};

export default swaggerJsDoc(swaggerOptions);
