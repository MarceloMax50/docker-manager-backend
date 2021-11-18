import { dockerApi } from "../../api/docker.api";

interface ICreateImageDTO {
  name: string;
  tag: string;
}

export class ImagesService {
  async list() {
    const { data: images } = await dockerApi.get("images/json?all=true");
    return images;
  }

  async show(id: string) {
    const { data: image } = await dockerApi.get(`images/${id}/json`);
    return image;
  }

  async create(fields: ICreateImageDTO) {
    const { name, tag } = fields;
    const { data: image } = await dockerApi.post(`images/create?fromImage=${name}&tag=${tag}`);
    return image;
  }

  async delete(id: string) {
    await dockerApi.delete(`images/${id}`);
  }

  async deleteAll() {
    await dockerApi.post("images/prune");
  }
}
