const Order = require("../models/Order");

const calculateTotalPrice = (products) => {
    return products.reduce((total, product) => total + product.price, 0);
};

const createOrder = async (products, userEmail) => {
    const total_price = calculateTotalPrice(products);
    const newOrder = new Order({
        products,
        user: userEmail,
        total_price,
    });
    return await newOrder.save();
};

module.exports = { createOrder };
