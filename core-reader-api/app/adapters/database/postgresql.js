import dotenv from "dotenv";
dotenv.config();
import pkg from "pg";
const { Pool } = pkg;

const options = {
  user: process.env.LOCAL_PGUSER,
  host: process.env.LOCAL_PGHOST,
  database: process.env.LOCAL_PGDATABASE,
  password: process.env.LOCAL_PGPASSWORD,
  port: process.env.LOCAL_PGPORT,
};

const pg_client = new Pool(options);
try {
  pg_client.connect();
  console.log("::> PostgreSQL Server is Ready");
} catch (err) {
  console.log(err.stack);
}

export default pg_client;
