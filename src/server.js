import express from "express";
import api from "./api/index.js";
import cors from "cors";
import { createTable } from "./config/sql.js";

const app = express();
app.use(cors());

const init = async () => {
  try {
    await createTable();
    serverStart();
  } catch (error) {
    console.log(error);
  }
};

const serverStart = () => {
  app.get("/", (req, res) => {
    return res.status(200).json({ message: "Welcome to home page" });
  });
  app.listen(3001);
};

app.use("/api", api);

init();
