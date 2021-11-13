import request from "requestretry";
import * as baseUrl from "../../configs/DockerApiConfig";

class ContainerDockerApi {
  public async listAllApi() {
    let url = `${baseUrl}/containers/json?all=true`;
    let response = await request({
      url: `${baseUrl}/containers/json?all=true`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return JSON.parse(response);
  }

  public async createApi(name: string, body: object) {
    let url = `${baseUrl}/containers/create?name=${name}`;
    let response = await request({
      url: `${baseUrl}/containers/json?all=true`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    return JSON.parse(response);
  }
  public async deleteApi(id: string) {
    let url = `${baseUrl}/containers/${id}`;
    let response = await request({
      url: `${baseUrl}/containers/json?all=true`,
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  public async deleteAllApi() {
    let containerList = await this.listAllApi();

    containerList.array.forEach((container: { id: string }) => {
      this.deleteApi(container.id);
    });
  }
}

export default ContainerDockerApi;
