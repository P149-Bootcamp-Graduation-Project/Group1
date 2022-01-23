const createProducer = require("../../adapters/queue/producer");

const air_controller = async (req, res) => {
  const { body } = req;
  try {
    await createProducer("air-quality-log", body);
    return res.status(200).send({ message: "Data qeueud successfully" });
  } catch (e) {
    return res.status(500).send({ message: e });
  }
};

const temp_controller = async (req, res) => {
  const { body } = req;
  try {
    await createProducer("temperature-log", body);
    return res.status(200).send({ message: "Data qeueud successfully" });
  } catch (e) {
    return res.status(500).send({ message: e });
  }
};

const elec_controller = async (req, res) => {
  const { body } = req;
  try {
    await createProducer("electricity-consumption-log", body);
    return res.status(200).send({ message: "Data qeueud successfully" });
  } catch (e) {
    return res.status(500).send({ message: e });
  }
};

module.exports = { air_controller, temp_controller, elec_controller };
