const express = require("express");
const router = express.Router();
const videoController = require("../controller/videoController");

router.get("/videos", videoController.getVideos);

router.get("/videos:id", videoController.getVideoById);

router.get("/test", (req, res) => {
  res.send("Test endpoint.");
});

console.log("Video routes loaded");

module.exports = router;
