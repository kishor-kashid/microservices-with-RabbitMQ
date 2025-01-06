# **microservices-with-RabbitMQ**

This project is a application built on microservices in a distributed system that manages products, users, orders including their creation and purchasing processes. It integrates with RabbitMQ for asynchronous communication with other services.

---

## **Features**

- **RabbitMQ Integration**: Communicates with the Order Service.
- **MongoDB Integration**: Stores product information persistently.

---

## **Table of Contents**
- [**microservices-with-RabbitMQ**](#microservices-with-rabbitmq)
  - [**Features**](#features)
  - [**Table of Contents**](#table-of-contents)
  - [**Prerequisites**](#prerequisites)
  - [**Installation**](#installation)
  - [**RabbitMQ Communication**](#rabbitmq-communication)
  - [**Running the Application**](#running-the-application)

---

## **Prerequisites**

Ensure the following tools are installed:
- **Node.js** (v14+)
- **MongoDB** (running locally or on a remote server)
- **RabbitMQ** (running on `localhost:5672` or a custom server)

---

## **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/kishor-kashid/microservices-with-RabbitMQ.git

2. Install dependencies in each microservice
   
3. Start MongoDB and RabbitMQ services on your local machine.

---

## **RabbitMQ Communication**

**Queues**
1. Order Queue (ORDER): Sends product details and user information to the Order Service.
2. Product Queue (PRODUCT): Receives order confirmation from the Order Service.

**Flow**
1. Product Service sends product and user details to the ORDER queue.
2. Order Service processes the order and sends confirmation back to the PRODUCT queue.
3. Product Service consumes the message and returns order details to the client.

---

## **Running the Application**

1. Navigate to each microservice and start the server
2. Access the API
