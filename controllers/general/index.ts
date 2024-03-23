import { Request, Response } from "express";

/**
 * @swagger
 * /:
 *   get:
 *     description: Return Hello World
 *     responses:
 *       200:
 *         description: Success
 *
 */
const hello = async (req: Request, res: Response) => {
  res.send({ message: "Hello, World!" });
};

export { hello };
