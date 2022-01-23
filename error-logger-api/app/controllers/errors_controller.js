import DbService from "../service/db_service.js";

export const createErrorLog = async (req, res) => {
  const params = { ...req.body };
  try {
    console.log("buraya geldi mi?, controller");
    params.created_at = new Date();
    const result = await DbService.insertOne(params);
    if (result) {
      return res.status(201).send({ message: "Log created successfully" });
    }
    return res.status(400).send({ message: "Something went wrong" });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: e });
  }
};

export const getAllErrorLogs = async (req, res) => {
  try {
    const result = await DbService.getAllLogs();
    if (result) {
      return res
        .status(200)
        .send({ message: "Logs read successfully", response: result });
    }
    return res.status(404).send({ message: "Logs NOT FOUND" });
  } catch (e) {
    return res.status(500).send({ message: e });
  }
};
