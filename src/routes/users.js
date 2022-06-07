"use strict";

const express = require("express");
const { userCollection } = require("../models/index");
const userRouter = express.Router();

userRouter.get("/user", getUsers);
userRouter.get("/user/:id", getOneUsers);
userRouter.post("/user", addUser);
userRouter.put("/user/:id", updateUser);
userRouter.delete("/user/:id", deleteUser);

async function getUsers(req, res) {
  let user = await userCollection.readRecord();
  res.status(200).json(user);
}

async function getOneUsers(req, res) {
  let userId = parseInt(req.params.id);
  let userName = await User.findOne({ where: { id: userId } });
  res.status(200).json(userName);
}

async function addUser(req, res) {
  let newUser = req.body;
  let user = await userCollection.createRecord(newUser);
  res.status(201).json(user);
}
async function updateUser(req, res) {
  let userId = parseInt(req.params.id);
  let updateUser = req.body;
  let foundUser = await userCollection.updateRecord({ where: { id: userId } });
  if (foundUser) {
    let updatedUser = await foundUser.update(updateFood);
    res.status(201).json(updatedUser);
  } else {
    res.status(404).json({ message: "User not found" });
  }
}

async function deleteUser(req, res) {
  let userId = parseInt(req.params.id);
  let deleteUser = await userCollection.deleteRecord(userId);
  res.status(201).json(deleteUser);
}

module.exports = userRouter;
