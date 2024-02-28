import albums from "../data/lanyAlbums.json" assert { type: "json" };
import {addAlbumToFile, deleteAlbumFromFile, updateAlbumInFile } from "../utils.mjs";
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

    if (!requestedAlbum) {
      return "No matching albums"
    } else {
      return requestedAlbum;
    }
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

export const updateAlbumInData = async (id, bodyObj) => {
  try {
    const albumToUpdate = albums.find(album => album.id === parseInt(id))
    albumToUpdate.releaseYear = bodyObj.releaseYear
    albumToUpdate.albumTitle = bodyObj.albumTitle
    albumToUpdate.songs = bodyObj.songs

    await updateAlbumInFile("./data/lanyAlbums.json", albums)

    return albumToUpdate

  } catch (error) {
    console.error(error)
  }
}