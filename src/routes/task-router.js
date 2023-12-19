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
taskRouter.delete("/tasks", deleteCompletedTasks);

export default taskRouter;
