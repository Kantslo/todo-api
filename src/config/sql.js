import pgk from "pg";

const { Pool } = pgk;

const pool = new Pool({
  host: "dpg-clt1cgqpmc4c73duu070-a",
  port: 5432,
  database: "todo_tt1y",
  user: "todo_tt1y_user",
  password: "jG37r2FGIDuR6eIvDDTLpE0IPSQW19PY",
});

export const createTable = async () => {
  return await pool.query(
    "CREATE TABLE IF NOT EXISTS todos (id SERIAL PRIMARY KEY, task TEXT, completed BOOLEAN)"
  );
};

export default pool;
