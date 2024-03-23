import { Request, Response } from "express";
import { MongoClient } from "mongodb";

/**
 * @swagger
 * /mongodb/read:
 *     get:
 *       summary: Read data from a MongoDB collection
 *       description: Connects to a MongoDB database and reads data from a specified collection.
 *       parameters:
 *         - in: query
 *           name: uri
 *           required: true
 *           type: string
 *           description: MongoDB URI, supports both standard and +srv formats.
 *         - in: query
 *           name: db
 *           required: true
 *           type: string
 *           description: The name of the database to connect to.
 *         - in: query
 *           name: collection
 *           required: true
 *           type: string
 *           description: The name of the collection from which to read data.
 *       responses:
 *         200:
 *           description: Successfully retrieved data from the collection. Returns JSON data.
 *           schema:
 *             type: array
 *             items:
 *               type: object
 *               additionalProperties: true
 *         400:
 *           description: Missing required fields in the request.
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 example: 'Missing required fields'
 *         500:
 *           description: An error occurred during processing, such as connection issues or internal errors.
 *           schema:
 *             type: object
 *             properties:
 *               error:
 *                 type: string
 *                 example: 'Error message describing the specific issue encountered.'
 */

const read = async (req: Request, res: Response) => {
  try {
    const { uri, db, collection } = req.query;
    if (!uri || !db || !collection) {
      return res.status(400).send({ message: "Missing required fields" });
    }

    let _uri;
    if (uri.toString().startsWith("mongodb srv")) {
      _uri = uri.toString().replace("mongodb srv", "mongodb+srv");
    } else {
      _uri = uri;
    }

    const client = new MongoClient(_uri as string);

    try {
      await client.connect();
      console.log("Connected to MongoDB");

      const database = client.db(db as string);
      const _collection = database.collection(collection as string);

      const x = await _collection.find({}).toArray();
      return res.send(x);
    } catch (err) {
      const error = err as Error;
      return res.status(500).send({ error: error.message.toString() });
    } finally {
      await client.close();
      console.log("Disconnected from MongoDB");
    }
  } catch (err) {
    const error = err as Error;
    return res.status(500).send({ error: error.message.toString() });
  }
};

export { read };
