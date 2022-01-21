import classModel from "../models/classes.js";
import DbService from "./databaseService.js";

class Classes extends DbService {
  model = classModel;
}

export default new Classes();
