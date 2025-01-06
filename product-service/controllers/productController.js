const { createProduct, getProductsByIds } = require("../services/productService");

let order;

const createProductController = async (req, res) => {
    const { name, description, price } = req.body;
    try {
        const newProduct = await createProduct({ name, description, price });
        res.status(201).json(newProduct);
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ message: "Failed to create product" });
    }
};

const buyProductController = async (req, res, channel) => {
    const { ids } = req.body;
    try {
        const products = await getProductsByIds(ids);
        channel.sendToQueue(
            "ORDER",
            Buffer.from(
                JSON.stringify({
                    products,
                    userEmail: req.user.email,
                })
            )
        );
        channel.consume("PRODUCT", (data) => {
            order = JSON.parse(data.content);
            channel.ack(data);
        });
        res.json(order);
    } catch (error) {
        console.error("Error buying products:", error);
        res.status(500).json({ message: "Failed to process purchase" });
    }
};

module.exports = { createProductController, buyProductController };
