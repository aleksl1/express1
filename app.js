const http = require("http");

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/users", (req, res, next) => {
  res.send("<div>users list</div>");
});

app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">submit</button></form>'
  );
});

app.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("hello");
});

app.listen(3000);
