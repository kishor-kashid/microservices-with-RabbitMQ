const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.json({ message: "Order service is running" }));

module.exports = router;
