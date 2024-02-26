import AlbumModel from "../Models/albumModel.mjs";

const sendAllAlbums = async (req, res) => {
    try {
        const albums = await AlbumModel()
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(albums));
    } catch (error) {
        console.error(error);
    }
};

export default sendAllAlbums;
