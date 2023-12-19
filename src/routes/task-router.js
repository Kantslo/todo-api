import express from "express";
import {
  createTask,
  deleteCompletedTasks,
  deleteTask,
  getAllTasks,
} from "../controllers/task-controller.js";

const taskRouter = express.Router();

taskRouter.get("/tasks", getAllTasks);
taskRouter.post("/tasks", createTask);
taskRouter.delete("/tasks/:id", deleteTask);
router.delete("/api/tasks/completed", deleteCompletedTasks);

export default taskRouter;
