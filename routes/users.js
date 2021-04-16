var express = require("express");
var router = express.Router();

var { db, User, Task } = require("../models");

// GET Requests
router.get("/", function (req, res, next) {
  res.render("users");
});

router.get("/login", function (req, res, next) {
  res.render("login", { failed: false });
});

router.get("/signup", function (req, res, next) {
  res.render("signup", { failed: false });
});

router.get("/:user", async function (req, res, next) {
  var username = req.params.user;
  var taskList = await Task.find({ user: username });
  res.render("dashboard", { user: username, list: taskList });
});

// POST Requests
router.post("/login", async function (req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  var user = await User.findOne({
    name: username,
    password: password
  });
  if (!user) res.render("login", { failed: true });
  else res.redirect(username);
});

router.post("/signup", async function (req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  var user = await User.findOne({
    name: username,
    password: password
  });
  if (user) res.render("signup", { failed: true });
  else {
    var tempUser = User({
      name: username,
      password: password
    });
    tempUser.save();
    res.redirect("login");
  }
});

router.post("/:user/add", async function (req, res, next) {
  var username = req.params.user;
  var tempTask = Task({
    id: await Task.count(),
    name: req.body.name,
    description: req.body.description,
    user: username
  });
  tempTask.save();
  res.redirect("/users/" + username);
});

router.post("/:user/del/:id", async function (req, res, next) {
  var username = req.params.user;
  await Task.findOneAndRemove({
    user: req.params.user,
    id: req.params.id
  });
  res.redirect("/users/" + username);
});

module.exports = router;
