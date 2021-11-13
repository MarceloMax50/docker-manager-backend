import request from "requestretry";

const DOCKER_HOST_IP = "";
const DOCKER_HOST_PORT = "";
export let baseUrl = `http://${DOCKER_HOST_IP}:${DOCKER_HOST_PORT}`;

class DockerApiConfig {
  public async getToken(
    username: string,
    password: string,
    serveraddress: string
  ) {
    let token = "";
    let body = {
      username: username,
      password: password,
      serveraddress: serveraddress,
    };
    let response = await request({
      url: `${baseUrl}/auth`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    token = JSON.parse(response).IdentityToken;
    return token;
  }
}
export default DockerApiConfig;
