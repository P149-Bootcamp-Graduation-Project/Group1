import electricLogsModel from "../models/electric-logs.js";
import DbService from "./database_service.js";

class ElectricLogs extends DbService {
  model = electricLogsModel;
}

export default new ElectricLogs();
