import TemperatureLogs from "../../services/temperature-logs_service.js";

// This controller will be used to create temperature log information
export const createTemperatureLog = async (req, res) => {
  try {
    let body = { ...req.body };
    const created_at = new Date();
    body.created_at = created_at;
    const data = await TemperatureLogs.insertQuery(body);
    return res
      .status(data.status)
      .send({ messages: data.message, response: data.response });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: e });
  }
};

//This controller will be used to edit temperature log information
export const updateTemperatureLogById = async (req, res) => {
  const { id } = req.params; // --> const id = req.params.id;
  const { body } = req; // --> const body = req.body;
  try {
    const data = await TemperatureLogs.updateByIdQuery(id, body);
    return res
      .status(data.status)
      .send({ messages: data.message, response: data.response });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: e });
  }
};

//This controller will be used to delete temperature log information
export const deleteTemperatureLogById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await TemperatureLogs.deleteByIdQuery(id);
    return res
      .status(data.status)
      .send({ messages: data.message, response: data.response });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: e });
  }
};

//This controller will be used to find temperature log information by id
export const findTemperatureLogById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await TemperatureLogs.findByIdQuery(id);
    return res
      .status(data.status)
      .send({ message: data.message, response: data.response });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: e });
  }
};

//This controller will be used to find all temperature log information
export const findAllTemperatureLogs = async (req, res) => {
  try {
    const data = await TemperatureLogs.getAllQuery();
    return res
      .status(data.status)
      .send({ messages: data.message, response: data.response });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: e });
  }
};

//This controller will be used to find all temperature log information by value
export const findTemperatureLogsByValues = async (req, res) => {
  const { body } = req;
  try {
    const data = await TemperatureLogs.findByValueQuery(body);
    return res
      .status(data.status)
      .send({ messages: data.message, response: data.response });
  } catch (e) {
    return res.status(500).send({ message: e });
  }
};
