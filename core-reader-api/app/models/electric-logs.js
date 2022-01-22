class ElectricLogsModel {
  columns = {
    id: "",
    school_id: "",
    class_id: "",
    sensor_id: "",
    sensor_data: "",
    read_at: "",
    created_at: "",
  };
  type = "log_electricity_consumption";
}

export default new ElectricLogsModel();
