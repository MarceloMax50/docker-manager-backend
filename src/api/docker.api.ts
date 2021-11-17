import axios from "axios";

import { getLocalIP } from "../config/network";

const port = process.env.DOCKER_HOST_PORT ? process.env.DOCKER_HOST_PORT : 2375;
const host = process.env.DOCKER_HOST_IP
  ? process.env.DOCKER_HOST_IP
  : getLocalIP();

const baseURL = `http://${host}:${port}/v1.41`;

export const dockerApi = axios.create({ baseURL });
