import Schools from "../../services/schools_service.js";

// This controller will be used to create school information
export const createSchool = async (req, res) => {
  try {
    let body = { ...req.body };
    const created_at = new Date();
    body.created_at = created_at;
    const data = await Schools.insertQuery(body);
    return res
      .status(data.status)
      .send({ messages: data.message, response: data.response });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: e });
  }
};

//This controller will be used to edit school information
export const updateSchoolById = async (req, res) => {
  const { id } = req.params; // --> const id = req.params.id;
  const { body } = req; // --> const body = req.body;
  try {
    const data = await Schools.updateByIdQuery(id, body);
    return res
      .status(data.status)
      .send({ messages: data.message, response: data.response });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: e });
  }
};

//This controller will be used to delete school information
export const deleteSchoolById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Schools.deleteByIdQuery(id);
    return res
      .status(data.status)
      .send({ messages: data.message, response: data.response });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: e });
  }
};

//This controller will be used to find school information by id
export const findSchoolById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Schools.findByIdQuery(id);
    return res
      .status(data.status)
      .send({ messages: data.message, response: data.response });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: e });
  }
};

//This controller will be used to find all school information
export const findAllSchools = async (req, res) => {
  try {
    const data = await Schools.getAllQuery();
    return res
      .status(data.status)
      .send({ messages: data.message, response: data.response });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: e });
  }
};

//This controller will be used to find all school information by value
export const findSchoolsByValues = async (req, res) => {
  const { body } = req;
  try {
    const data = await Schools.findByValueQuery(body);
    return res
      .status(data.status)
      .send({ messages: data.message, response: data.response });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: e });
  }
};
