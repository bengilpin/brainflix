const axios = require("axios");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();
const api_key = process.env.API_KEY;
const url = "https://project-2-api.herokuapp.com";

exports.getVideos = async () => {
  try {
    console.log("getVideos service called");
    const res = await axios.get(`${url}/videos?api_key=${api_key}`);
    return res.data;
  } catch (error) {
    console.error("Error in getVideos service:", error);
    throw error;
  }
};

exports.getVideoById = async (videoId) => {
  const res = await axios.get(`${url}/videos/${videoId}?api_key=${api_key}`);
  return res.data;
};

exports.addVideo = async (newVideoData) => {
    try {
      // Generate a unique ID using uuid
      const newVideoId = uuidv4();
  
      // Create a new video object with the required properties and the generated ID
      const newVideo = {
        id: newVideoId,
        title: newVideoData.title,
        description: newVideoData.description,
        url: newVideoData.url,
      };
  
      // Make a POST request to add the new video
      const res = await axios.post(`${url}/videos?api_key=${api_key}`, newVideo);
  
      return res.data;
    } catch (error) {
      console.error("Error in addVideo service:", error);
      throw error;
    }
  };