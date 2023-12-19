import express from "express";
import {
  createTask,
  deleteCompletedTasks,
  deleteTask,
  getAllTasks,
  updateTaskCompletion,
} from "../controllers/task-controller.js";

const taskRouter = express.Router();

taskRouter.get("/tasks", getAllTasks);
taskRouter.post("/tasks", createTask);
taskRouter.delete("/tasks/:id", deleteTask);
taskRouter.delete("/tasks", deleteCompletedTasks);
taskRouter.put("/tasks/:id", updateTaskCompletion);

export default taskRouter;
