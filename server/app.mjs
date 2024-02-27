import http from "http";
import url from "url";
const PORT = 3010;
import {
  sendAllAlbums,
  sendAlbumById,
  deletedAlbum

} from "./Controllers/albumsController.mjs";

const server = http.createServer(async (req, res) => {
  // url.parse seperates URL into parts such as pathname and path. 2nd param parses query into obj.
  const parsedUrl = url.parse(req.url, true);

  const pathname = parsedUrl.pathname;
  const id = parsedUrl.query.id;

  if (pathname === "/api/lanyAlbums" && req.method === "GET") {
    if (id) {
      console.log("IIIII", id)
      await sendAlbumById(id, req, res);
    } else {
      await sendAllAlbums(req, res);
    }
  } else if (pathname === "/api/lanyAlbums" && req.method === "DELETE") {
    console.log("delete route");
    await deletedAlbum(id, req, res)

  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found.");
  }
});

server.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
