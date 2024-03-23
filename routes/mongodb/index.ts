import express from "express";
const router = express.Router();

import { read } from "../../controllers/mongodb";

router.get("/read", read);

export default router;
