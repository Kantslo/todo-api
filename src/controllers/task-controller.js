import pool from "../config/sql.js";

export const getAllTasks = async (_, res) => {
  try {
    const resultQuery = await pool.query("SELECT * FROM todos");
    const rows = resultQuery.rows;
    return res.status(200).json(rows);
  } catch (error) {
    return res.status(401).json(error);
  }
};

export const createTask = async (req, res) => {
  try {
    const { task, completed } = req.body;
    const resultQuery = await pool.query(
      "INSERT INTO todos(task, completed) VALUES($1, $2) RETURNING *",
      [task, completed]
    );
    const newTodo = resultQuery.rows[0];
    return res.status(201).json(newTodo);
  } catch (error) {
    return res.status(401).json(error);
  }
};

export const deleteTask = async (req, res) => {
  const id = +req.params.id;

  try {
    const resultQuery = await pool.query("DELETE FROM todos WHERE id = $1", [
      id,
    ]);
    const rows = resultQuery.rows;
    return res.status(201).json(rows[0]);
  } catch (error) {
    return res.status(401).json(error);
  }
};
