const { createOrder } = require("../services/orderService");

const handleOrderCreation = async (products, userEmail, channel) => {
    const newOrder = await createOrder(products, userEmail);
    channel.sendToQueue(
        "PRODUCT",
        Buffer.from(JSON.stringify({ newOrder }))
    );
    console.log("Order created and sent to PRODUCT queue");
    return newOrder;
};

module.exports = { handleOrderCreation };
