import http from "http";
import url from "url";
const PORT = 3010;
import {
  sendAllAlbums,
  sendAlbumById,
  deletedAlbum,
  createAlbumAPI, 
  updateAlbumAPI 

} from "./Controllers/albumsController.mjs";

const server = http.createServer(async (req, res) => {
  // url.parse seperates URL into parts such as pathname and path. 2nd param parses query into obj.
  const parsedUrl = url.parse(req.url, true);

  const pathname = parsedUrl.pathname;
  const id = parsedUrl.query.id;

  if (pathname === "/api/lanyAlbums" && req.method === "GET") {
    if (id) {
      await sendAlbumById(id, req, res);
    } else {
      await sendAllAlbums(req, res);
    }
  } else if (pathname === "/api/lanyAlbums" && req.method === "DELETE") {
    await deletedAlbum(id, req, res)

  } else if (pathname === "/api/lanyAlbums" && req.method === "POST") {
    await createAlbumAPI(req, res)
  } else if (pathname === "/api/lanyAlbums" && req.method === "PUT") {
    await updateAlbumAPI(id, req, res)
  }
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found.");
  }
});

server.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
