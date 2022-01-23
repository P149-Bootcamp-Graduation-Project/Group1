import dotenv from "dotenv";
dotenv.config();
import client from "../adapters/database/mongodb.js";

class DbService {
  insertOne = async (param) => {
    console.log("buraya geldi mi? servis");
    const data = await client
      .db(process.env.MONGO_DEFAULT_DB)
      .collection(process.env.MONGO_DEFAULT_COLLECTION)
      .insertOne(param);
    return data.acknowledged;
  };

  getAllLogs = async () => {
    const data = await client
      .db(process.env.MONGO_DEFAULT_DB)
      .collection(process.env.MONGO_DEFAULT_COLLECTION)
      .find();
    return data;
  };
}

export default new DbService();
