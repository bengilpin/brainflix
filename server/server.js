const express = require("express");
const cors = require("cors");
const app = express();

const port = 8080;
const videoRoutes = require("./routes/videoRoutes");

app.use(cors());
// app.use(express.static("public"));
// app.use((req, res, next) => {});

app.use("/", videoRoutes);

app.listen(port, () => {
  console.log("listening on 8080 yo");
});
