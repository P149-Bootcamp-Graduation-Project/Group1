class TemperatureLogsModel {
    columns = {
      id: "",
      school_id: "",
      class_id: "",
      sensor_id: "",
      sensor_data: "",
      read_at: "",
      created_at: "",
    };
    type = "log_temperature";
  }
  
  export default new TemperatureLogsModel();
  