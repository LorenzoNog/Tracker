import usersController from "../controllers/users.controller.js";
import { Router } from "express";

const UsersRouter = Router();

UsersRouter.get("/", usersController.getAll);
UsersRouter.post("/login", usersController.loginUser);
UsersRouter.post("/registro", usersController.createUser);
UsersRouter.delete("/:uid", usersController.deleteById);

export default UsersRouter;

