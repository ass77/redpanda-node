"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disconnect = exports.getConnection = void 0;
// src/producer.ts
const kafkajs_1 = require("kafkajs");
const kafka = new kafkajs_1.Kafka({
    clientId: 'chat-app',
    brokers: ['127.0.0.1:9092']
});
const producer = kafka.producer();
function getConnection(user) {
    return producer.connect().then(() => {
        return (message) => {
            return producer.send({
                topic: 'chat-room',
                messages: [
                    { value: JSON.stringify({ message, user }) },
                ],
            });
        };
    });
}
exports.getConnection = getConnection;
function disconnect() {
    return producer.disconnect();
}
exports.disconnect = disconnect;
