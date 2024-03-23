import swaggerJsDoc from "swagger-jsdoc";

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API documentation with Swagger",
      version: "0.0.1",
      description: "API documentation",
    },
    components: {
      schemas: {
        UserInput: {
          type: "object",
          required: ["username", "email", "password"],
          properties: {
            username: { type: "string", example: "johndoe" },
            email: {
              type: "string",
              format: "email",
              example: "johndoe@example.com",
            },
            password: { type: "string", example: "s3cr3t" },
          },
        },
        User: {
          allOf: [
            { $ref: "#/components/schemas/UserInput" },
            {
              type: "object",
              required: ["_id"],
              properties: {
                _id: { type: "string", example: "5f4e7e5d60e2d4482c7f6b9b" },
              },
            },
          ],
        },
      },
    },
  },
  apis: ["**/*.ts"],
};

export default swaggerJsDoc(swaggerOptions);
