import sensorModel from "../models/sensors.js";
import DbService from "./database_service.js";

class Sensors extends DbService {
  model = sensorModel;
}

export default new Sensors();