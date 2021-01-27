const express = require("express");
const addressCustRouter = express.Router();
const addressCustController = require("../controllers/addressCtrl");
const checkToken = require("../helpers/middlewares/checkToken");

addressCustRouter.get("/", checkToken, addressCustController.getAddressByUser);
addressCustRouter.post("/", checkToken, addressCustController.newAddress);
addressCustRouter.patch("/:id", checkToken, addressCustController.updateAddress);

module.exports = addressCustRouter;