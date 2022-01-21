import { createClient } from "redis";

rd_client = createClient({ url: "redis://" + process.env.REDIS_HOST });

rd_client.on("connect", () => console.log("::> Redis Server is Ready"));
rd_client.on("error", (err) => console.log("<:: Redis Client Error", err));

(async () => {
  await rd_client.connect();
})();

export default rd_client;
