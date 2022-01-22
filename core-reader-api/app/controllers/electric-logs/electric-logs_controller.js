import ElectricLogs from "../../services/electric-logs_service.js";

// This controller will be used to create electric log information
export const createElectricLog = async (req, res) => {
  try {
    let body = { ...req.body };
    const created_at = new Date();
    body.created_at = created_at;
    const data = await ElectricLogs.insertQuery(body);
    return res
      .status(data.status)
      .send({ messages: data.message, response: data.response });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: e });
  }
};

//This controller will be used to edit electric log information
export const updateElectricLogById = async (req, res) => {
  const { id } = req.params; // --> const id = req.params.id;
  const { body } = req; // --> const body = req.body;
  try {
    const data = await ElectricLogs.updateByIdQuery(id, body);
    return res
      .status(data.status)
      .send({ messages: data.message, response: data.response });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: e });
  }
};

//This controller will be used to delete electric log information
export const deleteElectricLogById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await ElectricLogs.deleteByIdQuery(id);
    return res
      .status(data.status)
      .send({ messages: data.message, response: data.response });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: e });
  }
};

//This controller will be used to find electric log information by id
export const findElectricLogById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await ElectricLogs.findByIdQuery(id);
    return res
      .status(data.status)
      .send({ message: data.message, response: data.response });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: e });
  }
};

//This controller will be used to find all electric log information
export const findAllElectricLogs = async (req, res) => {
  try {
    const data = await ElectricLogs.getAllQuery();
    return res
      .status(data.status)
      .send({ messages: data.message, response: data.response });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: e });
  }
};

//This controller will be used to find all electric log information by value
export const findElectricLogsByValues = async (req, res) => {
  const { body } = req;
  try {
    const data = await ElectricLogs.findByValueQuery(body);
    return res
      .status(data.status)
      .send({ messages: data.message, response: data.response });
  } catch (e) {
    return res.status(500).send({ message: e });
  }
};
