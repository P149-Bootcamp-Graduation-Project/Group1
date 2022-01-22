import airLogsModel from "../models/air-logs.js";
import DbService from "./database_service.js";

class AirLogs extends DbService {
  model = airLogsModel;
}

export default new AirLogs();
