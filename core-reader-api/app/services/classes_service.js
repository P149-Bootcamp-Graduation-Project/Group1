import classModel from "../models/classes.js";
import DbService from "./database_service.js";

class Classes extends DbService {
  model = classModel;
}

export default new Classes();
