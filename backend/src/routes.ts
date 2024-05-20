import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";

const router = Router();

router.post("/users", new CreateUserController().handle);

router.post("/session", new AuthController().handle);

router.get("/me", isAuthenticated, new DetailUserController().handle);

router.post(
  "/category",
  isAuthenticated,
  new CreateCategoryController().handle
);

router.get("/category", isAuthenticated, new ListCategoryController().handle);

export { router };
