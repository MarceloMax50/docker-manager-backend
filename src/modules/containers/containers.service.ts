import { dockerApi } from "../../api/docker.api";

interface ICreateContainerDTO {
  name: string;
  image: string;
  port: string;
  env: string[];
}

export class ContainersService {
  async list() {
    const { data: containers } = await dockerApi.get("containers/json?all=true");
    return containers;
  }

  async show(id: string) {
    const { data: container } = await dockerApi.get(`containers/${id}/json`);
    return container;
  }

  async create(fields: ICreateContainerDTO) {
    const { data: container } = await dockerApi.post(`containers/create?name=${fields.name}`, fields);
    await dockerApi.post(`containers/${container.Id}/start`);
    return container;
  }

  async delete(id: string) {
    await dockerApi.post(`containers/${id}/kill`);
    await dockerApi.post("containers/prune");
  }

  async deleteAll() {
    const { data: runningContainers } = await dockerApi.get("containers/json");

    for (const runningContainer of runningContainers) {
      await dockerApi.post(`containers/${runningContainer.id}/kill`);
    }

    await dockerApi.post("containers/prune");
  }
}
