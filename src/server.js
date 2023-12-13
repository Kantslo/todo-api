import express from "express";
import api from "./api/index.js";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to home page" });
});

app.use("/api", api);

app.listen(3001);
