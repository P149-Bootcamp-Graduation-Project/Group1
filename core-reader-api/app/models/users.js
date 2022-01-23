class UsersModel {
  columns = {
    id: "",
    user_title: "",
    user_name: "",
    user_pass: "",
    email: "",
    phone: "",
    last_login: "",
    created_at: "",
    is_active: "",
  };
  type = "users";
}

export default new UsersModel();
