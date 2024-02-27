import { findAlbums, findAlbumById, deleteById } from "../Models/albumModel.mjs";

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
      await deleteById(id)
      res.writeHead(204)
      res.end()
    } catch (error) {
      console.error(error)
    }
}