import {
  findAlbums,
  findAlbumById,
  deleteById,
  createAlbum,
  updateAlbumInData
} from "../Models/albumModel.mjs";

export const sendAllAlbums = async (req, res) => {
  try {
    const albums = await findAlbums();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(albums));
  } catch (error) {
    console.error(error);
  }
};

export const sendAlbumById = async (id, req, res) => {
  try {
    const album = await findAlbumById(id);
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(typeof album === "string" ? album : JSON.stringify(album));
  } catch (error) {}
};

export const deletedAlbum = async (id, req, res) => {
  try {
    await deleteById(id);
    res.writeHead(204);
    res.end();
  } catch (error) {
    console.error(error);
  }
};

export const createAlbumAPI = async (req, res) => {
  try {
    let body = "";
    

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", async () => {
      const bodyObj = JSON.parse(body);
      const createdAlbum = await createAlbum(bodyObj);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(createdAlbum));
    });
  } catch (error) {
    console.error(error);
  }
};

export const updateAlbumAPI = async (id, req, res) => {
  try {
    let body = ""

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", async () => {
      const bodyObj = JSON.parse(body)
      const updatedAlbum = await updateAlbumInData(id, bodyObj);
      res.writeHead(200, {"Content-Type": "application/json"})
      res.end(JSON.stringify(updatedAlbum))
    });
  } catch (error) {
    console.error(error);
  }
};
