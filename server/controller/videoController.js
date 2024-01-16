const videoService = require("../services/videoService");

exports.getMinimalVideoData = async (req, res) => {
  try {
    const minimalData = await videoService.getMinimalVideoData();
    res.json(minimalData);
  } catch (err) {
    console.error("Error in getMinimalVideoData controller:", err);
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

    res.json(video);
  } catch (err) {
    console.error("Error in getVideoById controller:", err);
    res.status(500).json({ err: "Internal server error" });
  }
};

exports.addVideo = async (req, res) => {
  try {
    const newVideoData = req.body;

    const newVideo = await videoService.addVideo(newVideoData);

    res.json(newVideo);
  } catch (error) {
    console.error("Error in addVideo controller:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
