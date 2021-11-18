import express from "express";

import { AuthController } from "../modules/auth/auth.controller";
import { ContainersController } from "../modules/containers/containers.controller";
import { ImagesController } from "../modules/images/images.controller";

const routes = express.Router();

const authController = new AuthController();
const containersController = new ContainersController();
const imagesController = new ImagesController();

/**
 * Auth routes
 */
routes.post("/auth", authController.authenticate);

/**
 * Containers routes
 */
routes.get("/containers", containersController.list);
routes.get("/containers/:id", containersController.show)
routes.post("/containers", containersController.create);
routes.delete("/containers/:id", containersController.delete);
routes.delete("/containers", containersController.deleteAll);

// /**
//  * Image routes
//  */
routes.get("/images", imagesController.list);
routes.get("/images/:id", imagesController.show);
routes.post("/images", imagesController.create);
routes.delete("/images/:id", imagesController.delete);
routes.delete("/images", imagesController.deleteAll);

export default routes;
