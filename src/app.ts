import express from "express";
import dockerRoutes from "./routes/Routes";

import cors from "cors";

import errorMiddleware from "./middlewares/error.middleware";

const app = express();

app.use(cors());
app.use(express.json());

/** Rotas da API */
app.use(dockerRoutes);

app.use(errorMiddleware);

export default app;
