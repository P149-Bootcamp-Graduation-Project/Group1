const { Kafka, logLevel } = require("kafkajs");
require("dotenv").config();

const kafka = new Kafka({
  logLevel: logLevel.INFO,
  clientId: "p149",
  brokers: [`${process.env.KAFKA_HOST}:${process.env.KAFKA_PORT}`],
});

module.exports = kafka;
