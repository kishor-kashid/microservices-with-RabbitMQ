const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// Database connection
mongoose.connect(
    "mongodb://localhost/product-service",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => {
        console.log(`Product-Service DB Connected`);
    }
);

module.exports = app;
