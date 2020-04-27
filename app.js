const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  let today = new Date();
  let options = { weekday: "long", month: "long", day: "numeric" };
  let day = today.toLocaleDateString("en-US", options);

  res.render("List", { data: { listTitle: day, listItems: items } });
});

app.post("/", (req, res) => {
  console.log(req.body);

  var item = req.body.newItem;
  if (req.body.list === "Work List") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", (req, res) => {
  res.render("List", {
    data: { listTitle: "Work List", listItems: workItems },
  });
});

app.post("/work", (req, res) => {
  var item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

app.listen(3000, (req, res) => {
  console.log("Server is running on port 3000");
});
