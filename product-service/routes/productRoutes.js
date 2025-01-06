const express = require("express");
const { createProductController, buyProductController } = require("../controllers/productController");
const isAuthenticated = require("../../isAuthenticated");

const router = express.Router();

module.exports = (channel) => {
    router.post("/create", isAuthenticated, (req, res) => createProductController(req, res));
    router.post("/buy", isAuthenticated, (req, res) => buyProductController(req, res, channel));

    return router;
};
