import express from "express";
import cors from "cors";
import pool, { createTable } from "./config/sql.js";
import bodyParser from "body-parser";
import taskRouter from "./routes/task-router.js";

const app = express();

const init = async () => {
  try {
    await createTable();
    serverStart();
  } catch (error) {
    console.log(error);
  }
};

const serverStart = () => {
  app.use(bodyParser.json());
  app.use(cors());

  app.use("/api", taskRouter);

  app.listen(3000);
};

init();
