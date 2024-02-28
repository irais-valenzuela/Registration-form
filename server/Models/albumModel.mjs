import albums from "../data/lanyAlbums.json" assert { type: "json" };
import {addAlbumToFile, deleteAlbumFromFile} from "../utils.mjs";
import { v4 as uuidv4 } from "uuid";

export const findAlbums = async () => {
  try {
    return await albums;
  } catch (error) {
    console.error(error);
  }
};

export const findAlbumById = async (id) => {
  try {
    const requestedAlbum = await albums.find(
      (album) => album.id === parseInt(id)
    );
    return requestedAlbum;
  } catch (error) {
    console.error(error);
  }
};

export const deleteById = async (id) => {
  try {
    const deletedAlbum = albums.find((album) => album.id === parseInt(id));
    const newArr = await albums.filter((album) => album.id !== parseInt(id));
    deleteAlbumFromFile("./data/lanyAlbums.json", newArr)
    return deletedAlbum;
  } catch (error) {
    console.error(error);
  }
};

export const createAlbum = async (body) => {
  try {
    body.id = uuidv4();
    albums.push(body)
    await addAlbumToFile("./data/lanyAlbums.json", albums);
    return body
  } catch (error) {
    console.error(error);
  }
};
