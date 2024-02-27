import albums from "../data/lanyAlbums.json" assert { type: "json" };

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
    await albums.filter((album) => album.id !== parseInt(id));
    return deletedAlbum;
  } catch (error) {
    console.error(error);
  }
};
