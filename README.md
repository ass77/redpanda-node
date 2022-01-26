# Basic building blocks to work with Redpanda chatting system using nodejs-typescript


## Procedure

1. Install redpanda | rpk cli
2. Get redpanda services up using `systemctl start redpanda`
3. Create a topic called `chat-room`
```
rpk topic create chat-room --broker localhost:9092
```
4. npm install
5. Create a producer and consumer for receiving/sending messages
6. set clientId in `producer.ts` and `consumer.ts` to chat-room and brokers to `127.0.0.1:9092` 
7. open up at least two terminal and run `npm start`
