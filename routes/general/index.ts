import express from "express";
const router = express.Router();

import { hello } from "../../controllers/general";

router.get("/", hello);

export default router;
