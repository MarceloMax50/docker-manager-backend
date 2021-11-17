import { networkInterfaces, NetworkInterfaceInfo } from "os";

interface IPsList {
  [key: string]: string[];
}

export function getLocalIP() {
  const nets = networkInterfaces();
  const results: IPsList = {};

  for (const name of Object.keys(nets)) {
    for (const net of nets[name] as NetworkInterfaceInfo[]) {
      if (net.family === "IPv4" && !net.internal) {
        if (!results[name]) results[name] = [];
        results[name].push(net.address);
      }
    }
  }

  return results["en0"][0];
}
