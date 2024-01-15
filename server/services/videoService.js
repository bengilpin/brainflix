import axios from "axios";
require("dotenv").config();
const api_key = process.env.API_KEY;
const url = "https://project-2-api.herokuapp.com";

exports.getVideos = async () => {
  const res = await axios.get(`${url}/videos/${api_key}`);
  return res.data;
};
