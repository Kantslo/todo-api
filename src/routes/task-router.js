import express from "express";
import { createTask, getAllTasks } from "../controllers/tasks-controller.js";

const taskRouter = express.Router();

taskRouter.get("/tasks", getAllTasks);
taskRouter.post("/tasks", createTask);

export default taskRouter;
