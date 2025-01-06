const app = require("./app");
const { connectRabbitMQ } = require("./rabbitmq/connect");
const { handleOrderCreation } = require("./controllers/OrderController");

const PORT = process.env.PORT_ONE || 9090;

const startServer = async () => {
    const channel = await connectRabbitMQ();

    // Start consuming messages
    await channel.assertQueue("ORDER");
    channel.consume("ORDER", async (data) => {
        console.log("Consuming ORDER service");

        try {
            const { products, userEmail } = JSON.parse(data.content);
            await handleOrderCreation(products, userEmail, channel);
            channel.ack(data);
        } catch (error) {
            console.error("Error processing order:", error);
        }
    });

    // Start Express server
    app.listen(PORT, () => {
        console.log(`Order-Service running on port ${PORT}`);
    });
};

startServer().catch((err) => {
    console.error("Error starting server:", err);
});
