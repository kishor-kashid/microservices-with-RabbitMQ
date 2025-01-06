const amqp = require("amqplib");

let channel;

const connectRabbitMQ = async () => {
    const amqpServer = "amqp://localhost:5672";
    const connection = await amqp.connect(amqpServer);
    channel = await connection.createChannel();
    console.log("Connected to RabbitMQ");

    return channel;
};

module.exports = { connectRabbitMQ };
