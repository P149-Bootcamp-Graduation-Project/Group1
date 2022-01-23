import dotenv from "dotenv";
dotenv.config();
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URL;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();
    await client.db(process.env.MONGO_DEFAULT_DB).command({ ping: 1 });
    console.log("::> MongoDB Server is Ready");
  } catch (err) {
    throw new Error(err);
  }
}
run().catch(console.dir);

export default client;

/* CREATE COLLECTION EXAMPLE
const db = mongo_client.db('kisi');
db.createCollection('kisiler', (err, result) => {
    if (err) throw err;
    console.log('Koleksiyon oluşturuldu.');
    mongo_client.close();
});  */

/* CREATE COLLECTION EXAMPLE
const db = mongo_client.db('kisi');
db.createCollection('kisiler', (err, result) => {
    if (err) throw err;
    console.log('Koleksiyon oluşturuldu.');
    mongo_client.close();
});  */
