import { dockerApi } from "../../api/docker.api";

export class ContainersService {
  async list() {
    const { data: containers } = await dockerApi.get("containers/json");
    return containers;
  }
}
