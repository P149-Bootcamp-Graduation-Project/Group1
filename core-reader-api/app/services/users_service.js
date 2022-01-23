import usersModel from "../models/users.js";
import DbService from "./database_service.js";

class Users extends DbService {
  model = usersModel;
}

export default new Users();
