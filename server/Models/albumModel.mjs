import albums from "../data/lanyAlbums.json" assert { type: "json" };

const findAlbums = async () => {
  try {
    return await albums;
  } catch (error) {
    console.error(error);
  }
};

export default findAlbums;
