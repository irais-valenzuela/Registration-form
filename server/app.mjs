import http from "http";
const PORT = 3010;
import sendAllAlbums from "./Controllers/albumsController.mjs";

const server = http.createServer(async (req, res) => {
  if (req.url === "/api/lanyAlbums" && req.method === "GET") {
    await sendAllAlbums(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found.");
  }
});

server.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
