const { v4: uuidv4 } = require("uuid");
const fs = require("fs").promises;
require("dotenv").config();
const dataFilePath = "videos.json";

const readDataFromFile = async () => {
  try {
    const data = await fs.readFile(dataFilePath, "utf-8");
    return JSON.parse(data) || [];
  } catch (error) {
    console.error("Error reading data from file:", error);
    throw error;
  }
};

const writeDataToFile = async (data) => {
  try {
    await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2), "utf-8");
  } catch (error) {
    console.error("Error writing data to file:", error);
    throw error;
  }
};

exports.getMinimalVideoData = async () => {
  try {
    const videos = await readDataFromFile();
    const minimalData = videos.map(({ id, minimalData }) => ({
      id,
      ...minimalData,
    }));
    return minimalData;
  } catch (error) {
    console.error("Error in getMinimalVideoData service:", error);
    throw error;
  }
};

exports.getVideoById = async (videoId) => {
  try {
    const videos = await readDataFromFile();

    const foundVideo = videos.find((video) => video.id === videoId);

    if (!foundVideo) {
      return null;
    }

    return foundVideo.detailedData || {};
  } catch (error) {
    console.error("Error in getVideoById service:", error);
    throw error;
  }
};

exports.addVideo = async (newVideoData) => {
  try {
    const newVideoId = uuidv4();
    const imagePath = "/images/image1.jpeg";

    const newVideo = {
      id: newVideoId,
      minimalData: {
        title: newVideoData?.title ?? "Default Title",
        channel: "Default Channel",
        image: imagePath,
      },
      detailedData: {
        title: newVideoData?.title ?? "Default Title",
        description: newVideoData?.description ?? "Default Description",
        url: newVideoData?.url ?? "Default URL",
      },
    };

    const existingData = await readDataFromFile();

    existingData.push(newVideo);

    await writeDataToFile(existingData);

    return newVideo;
  } catch (error) {
    console.error("Error in addVideo service:", error);
    throw error;
  }
};
