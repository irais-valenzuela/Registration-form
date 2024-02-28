import {
  findAlbums,
  findAlbumById,
  deleteById,
  createAlbum,
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
    res.end(JSON.stringify(album));
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
    const body = {
      releaseYear: "2014",
      albumTitle: "You are fire",
      songs: ["Someone else"],
    };
    const createdAlbum = await createAlbum(body);
    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify(createdAlbum));
  } catch (error) {
    console.error(error);
  }
};
