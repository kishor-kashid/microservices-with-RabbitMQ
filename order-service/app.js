const express = require("express");
const mongoose = require("mongoose");
const orderRoutes = require("./routes/orderRoutes");

const app = express();
app.use(express.json());

// Database connection
mongoose.connect(
    "mongodb://localhost/order-service",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => {
        console.log(`Order-Service DB Connected`);
    }
);

// Routes
app.use("/order", orderRoutes);

module.exports = app;
