const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const createConsumer = require("./kafka/consumer");

const app = express();
app.use(express.json());

createConsumer();

const PORT = process.env.APP_PORT || 3003;

app.listen(PORT, () =>
  console.log(`Server is running now at port ${PORT}!`)
);
