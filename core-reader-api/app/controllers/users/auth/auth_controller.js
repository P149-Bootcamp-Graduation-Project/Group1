import dotenv from "dotenv";
dotenv.config();
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Users from "../../../services/users_service.js";
import rd_client from "../../../adapters/database/redis.js";

export const register = async (req, res) => {
  const { body } = req;
  let dataBody = { ...body };
  const params = { email: body.email };
  try {
    const userExist = await Users.findByValueQuery(params);

    if (userExist.response.length > 0) {
      return res.status(400).send({ message: "User already exist" });
    }

    const hash_pass = await bcrypt.hash(
      body.user_pass,
      Number(process.env.HASH_TIME)
    );

    dataBody.user_pass = hash_pass;
    dataBody.last_login = new Date();
    dataBody.created_at = new Date();
    const data = await Users.insertQuery(dataBody);
    // console.log(data && data.response);
    const key = "user_token_" + data.response.id;
    const token = jwt.sign(
      { id: data.response.id.toString(), key },
      process.env.JWT_SECRET
    );
    // await rd_client.setEx(key, 180, token);
    await rd_client.set(key, token);
    const responseData = { ...data.response };
    delete responseData.user_pass;
    delete responseData.created_at;
    delete responseData.id;
    delete responseData.is_active;
    return res
      .status(data.status)
      .send({ messages: data.message, response: responseData, token });
  } catch (e) {
    return res.status(500).send({ messages: e });
  }
};

export const login = async (req, res) => {
  const { body } = req;
  const params = { email: body.email };
  try {
    const data = await Users.findByValueQuery(params);
    const isMatch = await bcrypt.compare(
      body.user_pass,
      data.response[0].user_pass
    );
    if (!isMatch) {
      return res.status(401).send({ message: "Unable to login" });
    }
    const key = "user_token_" + data.response[0].id;
    let token = await rd_client.get(key);
    if (token) {
      return res.status(400).send({ message: "Already logged in" });
    }
    token = jwt.sign(
      { id: data.response[0].id.toString(), key },
      process.env.JWT_SECRET
    );
    // await rd_client.setEx(key, 180, token);
    await rd_client.set(key, token);
    const responseData = { ...data.response[0] };
    delete responseData.user_pass;
    delete responseData.created_at;
    delete responseData.id;
    delete responseData.is_active;
    return res
      .status(data.status)
      .send({ messages: data.message, response: responseData, token });
  } catch (error) {
    return res.status(500).send({ messages: error });
  }
};

export const logout = async (req, res) => {
  const { key } = req;
  try {
    await rd_client.del(key);
    return res.status(200).send({ message: "User logged out successffully" });
  } catch (e) {
    return res.status(500).send({ messages: e });
  }
};
