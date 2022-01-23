import Users from "../../services/users_service.js";

//This controller will be used to edit user information
export const updateUserProfile = async (req, res) => {
  const { user, body } = req; // --> const id = req.params.id;
  try {
    const data = await Users.updateByIdQuery(user.id, body);
    return res
      .status(data.status)
      .send({ messages: data.message, response: data.response });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: e });
  }
};

//This controller will be used to find user information by id
export const findUserProfile = async (req, res) => {
  const { user } = req;
  try {
    return res
      .status(200)
      .send({ message: "User found successfully", response: user });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: e });
  }
};

//This controller will be used to delete user information
export const deleteUserProfile = async (req, res) => {
  const { user } = req;
  try {
    const data = await Users.deleteByIdQuery(user.id);
    return res
      .status(data.status)
      .send({ messages: data.message, response: data.response });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: e });
  }
};
