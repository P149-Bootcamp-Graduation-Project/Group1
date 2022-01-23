const dotenv = require("dotenv");
dotenv.config();
const pg_client = require("../database/postgresql");
const kafka = require("./kafka");
const axios = require("axios");

async function createConsumer() {
  try {
    const consumer = kafka.consumer({
      groupId: "group0",
    });

    console.log("Consumer'a bağlanılıyor..");
    await consumer.connect();
    console.log("Bağlantı başarılı.");

    // Consumer Subscribe..
    await consumer.subscribe({
      topic: "air-quality-log",
      fromBeginning: true,
    });

    // Consumer Subscribe..
    await consumer.subscribe({
      topic: "electricity-consumption-log",
      fromBeginning: true,
    });

    // Consumer Subscribe..
    await consumer.subscribe({
      topic: "temperature-log",
      fromBeginning: true,
    });

    await consumer.run({
      autoCommit: true,
      eachMessage: async (result) => {
        const data = JSON.parse(result.message.value);
        console.log(data);
        if (result.topic === "air-quality-log") {
          await pg_client
            .query(
              "insert into log_air_quality (school_id, class_id, sensor_id, sensor_data, read_at) " +
                `values(${Number(data.id)}, ${Number(data.id)}, ${Number(
                  data.id
                )}, '${data.sensor_data}', to_timestamp(${Number(
                  data.time_stamp
                )} / 1000.0))`
            )
            .then()
            .catch(async (err) => {
              const error_data = {
                topic: result.topic,
                data: data,
                error: err,
                errorMessage: err.message,
                created_at: Date.now(),
                is_solved: 0,
              };
              console.log(err.message);
              const axios_data = await axios.post(
                process.env.ERROR_LOG_URL,
                error_data
              );
            });
        } else if (result.topic === "electricity-consumption-log") {
          await pg_client
            .query(
              "insert into log_electricity_consumption (school_id, class_id, sensor_id, sensor_data, read_at) " +
                `values(${Number(data.id)}, ${Number(data.id)}, ${Number(
                  data.id
                )}, '${data.sensor_data}', to_timestamp(${Number(
                  data.time_stamp
                )} / 1000.0))`
            )
            .catch(async (err) => {
              console.log(err.message);
              const error_data = {
                topic: result.topic,
                data: data,
                error: err,
                errorMessage: err.message,
                created_at: Date.now(),
                is_solved: 0,
              };
              const axios_data = await axios.post(
                process.env.ERROR_LOG_URL,
                error_data
              );
            });
        } else if (result.topic === "temperature-log") {
          await pg_client
            .query(
              "insert into log_temperature (school_id, class_id, sensor_id, sensor_data, read_at) " +
                `values(${Number(data.id)}, ${Number(data.id)}, ${Number(
                  data.id
                )}, '${data.sensor_data}', to_timestamp(${Number(
                  data.time_stamp
                )} / 1000.0))`
            )
            .catch(async (err) => {
              const error_data = {
                topic: result.topic,
                data: data,
                error: err,
                errorMessage: err.message,
                created_at: Date.now(),
                is_solved: 0,
              };
              const axios_data = await axios.post(
                process.env.ERROR_LOG_URL,
                error_data
              );
            });
        }
      },
    });
  } catch (error) {
    console.log("Bir Hata Oluştu", error);
  }
}

module.exports = createConsumer;
