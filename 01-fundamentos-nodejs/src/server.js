import http from "node:http";

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/users") {
    return res.end("List of users");
  }

  if (method === "POST" && url === "/users") {
    return res.end("User created.");
  }

  return res.end("Hello Kim");
});

server.listen(3333);
