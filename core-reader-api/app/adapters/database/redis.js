import { createClient } from "redis";

// rd_client = createClient({ url: "redis://" + process.env.LOCAL_REDIS_HOST });

const rd_client = createClient({
  host: process.env.LOCAL_REDIS_HOST,
  port: process.env.LOCAL_REDIS_PORT,
});

rd_client.on("connect", () => console.log("::> Redis Server is Ready"));
rd_client.on("error", (err) => console.log("<:: Redis Client Error", err));

(async () => {
  await rd_client.connect();
})();

export default rd_client;
