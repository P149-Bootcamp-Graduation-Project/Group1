import Sensors from "../../services/sensors_service.js";

// This controller will be used to create class information
export const createSensor = async (req, res) => {
  try {
    let body = { ...req.body };
    const created_at = new Date();
    body.created_at = created_at;
    const data = await Sensors.insertQuery(body);
    return res
      .status(data.status)
      .send({ messages: data.message, response: data.response });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: e });
  }
};

//This controller will be used to edit class information
export const updateSensorById = async (req, res) => {
  const { id } = req.params; // --> const id = req.params.id;
  const { body } = req; // --> const body = req.body;
  try {
    const data = await Sensors.updateByIdQuery(id, body);
    return res
      .status(data.status)
      .send({ messages: data.message, response: data.response });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: e });
  }
};

//This controller will be used to delete class information
export const deleteSensorById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Sensors.deleteByIdQuery(id);
    return res
      .status(data.status)
      .send({ messages: data.message, response: data.response });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: e });
  }
};

//This controller will be used to find class information by id
export const findSensorById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Sensors.findByIdQuery(id);
    return res
      .status(data.status)
      .send({ messages: data.message, response: data.response });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: e });
  }
};

//This controller will be used to find all class information
export const findAllSensors = async (req, res) => {
  try {
    const data = await Sensors.getAllQuery();
    return res
      .status(data.status)
      .send({ messages: data.message, response: data.response });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: e });
  }
};

//This controller will be used to find all class information by value
export const findSensorsByValues = async (req, res) => {
  const { body } = req;
  try {
    const data = await Sensors.findByValueQuery(body);
    return res
      .status(data.status)
      .send({ messages: data.message, response: data.response });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: e });
  }
};
