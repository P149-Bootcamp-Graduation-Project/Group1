const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const router = require("./app/routes/index.js");
// import "./app/adapters/database/postgresql.js";

const app = express();

app.use(cors({ credentials: true, origin: true }));
app.use(express.json());
app.use("/", router);

const PORT = process.env.APP_PORT || 3002;

app.listen(PORT, () =>
  console.log(`FormlarDoldurulmamis is running now at port ${PORT}!`)
);
