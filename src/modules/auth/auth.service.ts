import { dockerApi } from "../../api/docker.api";

import { AuthRequest } from "./auth.dto";

interface DockerAuthResponse {
  status: string;
  identityToken: string;
}

export class AuthService {
  async authenticate(credentials: AuthRequest) {
    const { data } = await dockerApi.post<DockerAuthResponse>(
      "/auth",
      credentials
    );

    return data.identityToken;
  }
}
