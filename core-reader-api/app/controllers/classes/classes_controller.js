import Classes from "../../services/classesService.js";

// This controller will be used to create class information
export const createClass = async (req, res) => {
  try {
    let body = { ...req.body };
    const created_at = new Date();
    body.created_at = created_at;
    const response = await Classes.insertQuery(body);
    return res
      .status(201)
      .send({ messages: "Class created successfully!", response });
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
    const response = await Classes.updateByIdQuery(id, body);
    return res
      .status(200)
      .send({ message: "Class updated successfully!", response });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: e });
  }
};

//This controller will be used to delete class information
export const deleteClassById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await Classes.deleteByIdQuery(id);
    return res
      .status(200)
      .send({ message: "Class deleted successfully!", response });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: e });
  }
};

export const findClassById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await Classes.findByIdQuery(id);
    return res
      .status(200)
      .send({ message: "Class read successfully!", response });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: e });
  }
};

export const findAllClasses = async (req, res) => {
  try {
    const response = await Classes.getAllClassesQuery();
    return res
      .status(200)
      .send({ message: "All classes read successfully!", response });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: e });
  }
};
