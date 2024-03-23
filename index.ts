import express, { Express } from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import swaggerUI from "swagger-ui-express";

import swaggerDocument from "./lib/swagger";

import mongodbRoutes from "./routes/mongodb";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

app.use("/mongodb", mongodbRoutes);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.get("/", (req, res) => {
  res.redirect("https://www.google.com");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
