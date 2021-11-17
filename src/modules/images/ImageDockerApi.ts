import request from "requestretry";

// class ImageDockerApi {
//   public async listAllApi() {
//     let url = `${baseUrl}/images/json?all=true`;
//     let response = await request({
//       url: `${baseUrl}/images/json?all=true`,
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     return JSON.parse(response);
//   }

//   public async createApi(name: string, body: object) {
//     let url = `${baseUrl}/images/create?fromImage=${name}`;
//     let response = await request({
//       url: `${baseUrl}/images/json?all=true`,
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(body),
//     });

//     return JSON.parse(response);
//   }
//   public async deleteApi(id: string) {
//     let url = `${baseUrl}/images/${id}`;
//     let response = await request({
//       url: `${baseUrl}/images/json?all=true`,
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   }
//   public async deleteAllApi() {
//     let containerList = await this.listAllApi();

//     containerList.array.forEach((container: { id: string }) => {
//       this.deleteApi(container.id);
//     });
//   }
// }

// export default ImageDockerApi;
