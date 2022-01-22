class SensorsModel {
  columns = {
    id: "",
    school_id: "",
    class_id: "",
    sensor_name: "",
    detail: "",
    default_protocol: "",
    default_ip: "",
    default_port: "",
    default_channel: "",
    created_at: "",
    connected_at: "",
    created_by: "",
    is_online: "",
    is_active: "",
  };
  type = "sensors";
}

export default new SensorsModel();
