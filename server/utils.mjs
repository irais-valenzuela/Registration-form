import fs from "fs";

export const addAlbumToFile = (fileName, content) => {
  const correctFormatContent = JSON.stringify(content);
  fs.writeFile(fileName, correctFormatContent, "utf-8", (error) => {
    if (error) {
      console.error("Error writing file", error);
    } else {
      console.log("File successfully written");
    }
  });
};

export const deleteAlbumFromFile = (fileName, content) => {
  const correctFormatContent = JSON.stringify(content);
  fs.writeFile(fileName, correctFormatContent, "utf-8", (error) => {
    if (error) {
      console.error("Error writing file", error);
    } else {
      console.log("File successfully written");
    }
  });
};


export const updateAlbumInFile = (fileName, content) => {
  const correctFormatContent = JSON.stringify(content);
  fs.writeFile(fileName, correctFormatContent, "utf-8", (error) => {
    if (error) {
        console.error("Error writing file", error);
      } else {
        console.log("File successfully written");
      }
  })
}