const express = require("express");
const router = express.Router();
const { users } = require("../models");

router.get("/", async (req, res) => {
  const listOfUsers = await users.findAll();
  res.json(listOfUsers);
});

router.post("/", async (req, res) => {
  try {
    let user = req.body;
    console.log(user);
    await users.create(user);
    res.json(user);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
