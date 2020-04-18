const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

let items = [];

app.get("/", (req, res) => {
  const today = new Date();
  var options = { weekday: "long", month: "long", day: "numeric" };
  const day = today.toLocaleDateString("en-US", options);
  res.render("list", { kindOfDay: day, itemList: items });
  //   res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  var item = req.body.newItem;
  items.push(item);
  res.redirect("/");
  // console.log(item);
});

app.listen(3000, (req, res) => {
  console.log("Server is running on port 3000");
});
