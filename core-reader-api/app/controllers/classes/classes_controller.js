import Classes from "../../services/classes_service.js";

// This controller will be used to create class information
export const createClass = async (req, res) => {
  try {
    let body = { ...req.body };
    const created_at = new Date();
    body.created_at = created_at;
    const data = await Classes.insertQuery(body);
    return res
      .status(data.status)
      .send({ messages: data.message, response: data.response });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: e });
  }
};

//This controller will be used to edit class information
export const updateClassById = async (req, res) => {
  const { id } = req.params; // --> const id = req.params.id;
  const { body } = req; // --> const body = req.body;
  try {
    const data = await Classes.updateByIdQuery(id, body);
    return res
      .status(data.status)
      .send({ messages: data.message, response: data.response });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: e });
  }
};

//This controller will be used to delete class information
export const deleteClassById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Classes.deleteByIdQuery(id);
    return res
      .status(data.status)
      .send({ messages: data.message, response: data.response });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: e });
  }
};

//This controller will be used to find class information by id
export const findClassById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Classes.findByIdQuery(id);
    return res
      .status(data.status)
      .send({ message: data.message, response: data.response });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: e });
  }
};

//This controller will be used to find all class information
export const findAllClasses = async (req, res) => {
  try {
    const data = await Classes.getAllQuery();
    return res
      .status(data.status)
      .send({ messages: data.message, response: data.response });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: e });
  }
};

//This controller will be used to find all class information by value
export const findClassesByValues = async (req, res) => {
  const { body } = req;
  try {
    const data = await Classes.findByValueQuery(body);
    return res
      .status(data.status)
      .send({ messages: data.message, response: data.response });
  } catch (e) {
    return res.status(500).send({ message: e });
  }
};
