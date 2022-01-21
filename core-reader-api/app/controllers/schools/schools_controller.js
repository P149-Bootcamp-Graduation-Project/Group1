import Schools from "../../services/schools_service.js";

// This controller will be used to create class information
export const createSchool = async (req, res) => {
    try {
      let body = { ...req.body };
      const created_at = new Date();
      body.created_at = created_at;
      const response = await Schools.insertQuery(body);
      return res
        .status(201)
        .send({ messages: "School created successfully!", response });
    } catch (e) {
      console.log(e);
      return res.status(500).send({ message: e });
    }
  };
  
  //This controller will be used to edit class information
  export const updateSchoolById = async (req, res) => {
    const { id } = req.params; // --> const id = req.params.id;
    const { body } = req; // --> const body = req.body;
    try {
      const response = await Schools.updateByIdQuery(id, body);
      return res
        .status(200)
        .send({ message: "School updated successfully!", response });
    } catch (e) {
      console.log(e);
      return res.status(500).send({ message: e });
    }
  };
  
  //This controller will be used to delete class information
  export const deleteSchoolById = async (req, res) => {
    const { id } = req.params;
    try {
      const response = await Schools.deleteByIdQuery(id);
      return res
        .status(200)
        .send({ message: "School deleted successfully!", response });
    } catch (e) {
      console.log(e);
      return res.status(500).send({ message: e });
    }
  };
  
  //This controller will be used to find class information by id
  export const findSchoolById = async (req, res) => {
    const { id } = req.params;
    try {
      const response = await Schools.findByIdQuery(id);
      return res
        .status(200)
        .send({ message: "School read successfully!", response });
    } catch (e) {
      console.log(e);
      return res.status(500).send({ message: e });
    }
  };
  
  //This controller will be used to find all class information
  export const findAllSchools = async (req, res) => {
    try {
      const response = await Schools.getAllQuery();
      return res
        .status(200)
        .send({ message: "All classes read successfully!", response });
    } catch (e) {
      console.log(e);
      return res.status(500).send({ message: e });
    }
  };
  
  //This controller will be used to find all class information by value
  export const findSchoolsByValues = async (req, res) => {
    const { body } = req;
    try {
      const response = await Schools.findByValueQuery(body);
      return res
        .status(200)
        .send({ message: "All classes read successfully!", response });
    } catch (e) {
      console.log(e);
      return res.status(500).send({ message: e });
    }
  };