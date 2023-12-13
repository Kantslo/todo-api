import express from "express";
import cors from "cors";
import pool, { createTable } from "./config/sql.js";

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
  app.get("/api/items", async (_, res) => {
    try {
      const resultQuery = await pool.query("SELECT * FROM todos");
      const rows = resultQuery.rows;
      return res.status(200).json(rows);
    } catch (error) {
      return res.status(401).json(error);
    }
  });
  app.listen(3001);
};

init();
