const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = ["Buy Food", "Cook Food", "Eat Food"];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function(req, res) {
  var today = new Date();
  var options = { weekday: "long", month: "long", day: "numeric" };
  var day = today.toLocaleDateString("en-US", options);
  res.render("list", { kindOfDay: day ,itemList: items});
  // itemList: items
});

// app.post("/", (req, res) => {
//   var item = req.body.newItem;
//   items.push(item);
//   res.redirect("/");
// });

app.listen(3000, (req, res) => {
  console.log("Server is running on port 3000");
});
