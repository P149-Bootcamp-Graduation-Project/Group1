import schoolsModel from "../models/schools.js";
import DbService from "./database_service.js";

class Schools extends DbService {
  model = schoolsModel;
}

export default new Schools();
