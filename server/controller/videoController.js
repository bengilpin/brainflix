const videoService = require("../services/videoService");

exports.getVideos = async (req, res) => {
  try {
    console.log("Request received for getVideos");
    const videos = await videoService.getVideos();
    res.json({ videos });
  } catch (err) {
    console.log("Error in getVideos controller:", err);
    res.status(500).json({ err: "Internal server error" });
  }
};

exports.getVideoById = async (req, res) => {
    try {
      const videoId = req.params.id;
      const video = await videoService.getVideoById(videoId);
  
      if (!video) {
        return res.status(404).json({ error: "Video not found" });
      }
  
      res.json({ video });
    } catch (err) {
      console.log("Error in getVideoById controller:", err);
      res.status(500).json({ err: "Internal server error" });
    }
  };

  exports.addVideo = async (req, res) => {
    try {
      const newVideoData = req.body; // Assuming the new video data is sent in the request body
  
      if (!newVideoData.title || !newVideoData.description || !newVideoData.url) {
        return res.status(400).json({ error: "Title, description, and URL are required fields" });
      }
  
      const addedVideo = await videoService.addVideo(newVideoData);
  
      res.status(201).json({ addedVideo });
    } catch (err) {
      console.log("Error in addVideo controller:", err);
      res.status(500).json({ err: "Internal server error" });
    }
  };

  exports.addVideo = async (newVideoData) => {
    try {
      // Create a new video object with the required properties
      const newVideo = {
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

