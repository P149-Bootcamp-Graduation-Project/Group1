import AirLogs from "../../services/air-logs_service.js";

// This controller will be used to create air log information
export const createAirLog = async (req, res) => {
  try {
    let body = { ...req.body };
    const created_at = new Date();
    body.created_at = created_at;
    const data = await AirLogs.insertQuery(body);
    return res
      .status(data.status)
      .send({ messages: data.message, response: data.response });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: e });
  }
};

//This controller will be used to edit air log information
export const updateAirLogById = async (req, res) => {
  const { id } = req.params; // --> const id = req.params.id;
  const { body } = req; // --> const body = req.body;
  try {
    const data = await AirLogs.updateByIdQuery(id, body);
    return res
      .status(data.status)
      .send({ messages: data.message, response: data.response });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: e });
  }
};

//This controller will be used to delete air log information
export const deleteAirLogById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await AirLogs.deleteByIdQuery(id);
    return res
      .status(data.status)
      .send({ messages: data.message, response: data.response });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: e });
  }
};

//This controller will be used to find air log information by id
export const findAirLogById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await AirLogs.findByIdQuery(id);
    return res
      .status(data.status)
      .send({ message: data.message, response: data.response });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: e });
  }
};

//This controller will be used to find all air log information
export const findAllAirLogs = async (req, res) => {
  try {
    const data = await AirLogs.getAllQuery();
    return res
      .status(data.status)
      .send({ messages: data.message, response: data.response });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: e });
  }
};

//This controller will be used to find all air log information by value
export const findAirLogsByValues = async (req, res) => {
  const { body } = req;
  try {
    const data = await AirLogs.findByValueQuery(body);
    return res
      .status(data.status)
      .send({ messages: data.message, response: data.response });
  } catch (e) {
    return res.status(500).send({ message: e });
  }
};
