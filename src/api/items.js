import express from "express";

const router = express.Router();

const items = [{ id: 1, name: "Tasks", completed: false }];

router.get("/", (req, res) => {
  res.json({
    items,
  });
});

export default router;
