const express = require("express");
const userModel = require("../models/users");

const router = express.Router();

router.get("/", (req, res) => {
  userModel.fetchAll().then(users => res.send(users));
});

router.post("/", (req, res) => {
  console.log(req.body);
  userModel
    .add(req.body.email, req.body.password)
    .then(() => res.send("User added!"));
});

module.exports = router;
