const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const today = new Date();
  var options = { weekday: "long", month: "long", day: "numeric" };
  const day = today.toLocaleDateString("en-US", options);
  res.render("list", { kindOfDay: day });
  //   res.sendFile(__dirname + "/index.html");
});

app.listen(3000, (req, res) => {
  console.log("Server is running on port 3000");
});
