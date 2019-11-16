import express from "express";

export const settingRouter = express.Router();

settingRouter.get("/", (req, res) => res.send("Welcome to my settings"));
settingRouter.get("/profile", (req, res) => res.send("Change your Profile??"));
settingRouter.get("/password", (req, res) =>
  res.send("Change your Password??")
);
settingRouter.get("/category", (req, res) =>
  res.send("Change your Category??")
);
