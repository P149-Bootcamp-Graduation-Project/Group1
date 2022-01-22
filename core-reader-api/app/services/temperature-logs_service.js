import temperatureLogsModel from "../models/temperature-logs.js";
import DbService from "./database_service.js";

class TemperatureLogs extends DbService {
  model = temperatureLogsModel;
}

export default new TemperatureLogs();
