const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  let today = new Date();
  let options = { weekday: "long", month: "long", day: "numeric" };
  let day = today.toLocaleDateString("en-US", options);

  res.render("List", { data: { kindOfDay: day, listItems: items } });
});

app.post("/", (req, res) => {
  var item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});

app.listen(3000, (req, res) => {
  console.log("Server is running on port 3000");
});
