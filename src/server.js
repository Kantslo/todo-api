import express from "express";
import cors from "cors";
import pool, { createTable } from "./config/sql.js";
import bodyParser from "body-parser";

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
  app.get("/api/items", async (_, res) => {
    try {
      const resultQuery = await pool.query("SELECT * FROM todos");
      const rows = resultQuery.rows;
      return res.status(200).json(rows);
    } catch (error) {
      return res.status(401).json(error);
    }
  });
  app.post("/api/items", async (req, res) => {
    try {
      const { task, completed } = req.body;
      const resultQuery = await pool.query(
        "INSERT INTO todos(task, completed) VALUES($1, $2)",
        [task, completed]
      );
      const rows = resultQuery.rows;
      return res.status(201).json(rows[0]);
    } catch (error) {
      console.log(error);
    }
  });
  app.listen(3001);
};

init();
