const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.static("public"));
const port = 8080;
const foodRoutes = require("./routes/foodRoutes");

app.use(cors());

// app.use((req, res, next) => {});

app.use("/foods", foodRoutes);
app.listen(port, () => {
  console.log("listening on 8080");
});
