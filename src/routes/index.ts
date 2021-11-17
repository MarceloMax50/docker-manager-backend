import express from "express";

import { AuthController } from "../modules/auth/auth.controller";
import { ContainersController } from "../modules/containers/containers.controller";
// import ImageController from "../modules/images/ImageController";

const routes = express.Router();

const authController = new AuthController();
const containersControllers = new ContainersController();

/**
 * Auth routes
 */
routes.post("/auth", authController.authenticate);

/**
 * Containers routes
 */
routes.get("/containers", containersControllers.list);
// router.post("/containers/:name", containerController.create);
// router.delete("/containers/:id", containerController.delete);
// router.delete("/containers", containerController.deleteAll);

// /**
//  * Image routes
//  */
// router.get("/images", imageController.listAll);
// router.post("/images/:name", imageController.create);
// router.delete("/images/:id", imageController.delete);
// router.delete("/images", imageController.deleteAll);

export default routes;
