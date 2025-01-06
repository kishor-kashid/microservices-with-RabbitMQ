const app = require("./app");
const productRoutes = require("./routes/productRoutes");
const { connectRabbitMQ } = require("./rabbitmq/connect");

const PORT = process.env.PORT_ONE || 8080;

const startServer = async () => {
    const channel = await connectRabbitMQ();
    app.use("/product", productRoutes(channel));

    app.listen(PORT, () => {
        console.log(`Product-Service running on port ${PORT}`);
    });
};

startServer().catch((err) => {
    console.error("Error starting server:", err);
});
