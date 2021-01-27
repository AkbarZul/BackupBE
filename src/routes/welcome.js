const express = require("express");
const welcomeRouter = express.Router();

welcomeRouter.get("/", (_, res) => {
  const resObject = {
    message: "Welcome master",
    status: 200,
  }
  res.status(200).json(resObject);
});

module.exports = welcomeRouter;
