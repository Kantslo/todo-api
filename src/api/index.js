import express from "express";
import items from "./items.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "welcome to API",
  });
});

router.use("/items", items);

export default router;
