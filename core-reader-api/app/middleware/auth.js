import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
import rd_client from "../adapters/database/redis.js";
import Users from "../services/users_service.js";

export const auth = async (req, res, next) => {
  try {
    let token = req.header("Authorization");
    if (token.includes("Bearer")) token = token.replace("Bearer ", "");

    const decode = jwt.verify(token, process.env.JWT_SECRET);

    const cachedToken = await rd_client.get(decode.key);
    if (!cachedToken) {
      return res
        .status(401)
        .send({ error: "User already logged out, to do this action log in!" });
    }
    const user = await Users.findByIdQuery(decode.id);
    if (user && user.response) {
      const req_user = { id: decode.id, ...user.response };
      delete req_user.user_pass;
      delete req_user.created_at;
      delete req_user.is_active;
      req.user = req_user;
      req.key = decode.key;
      next();
    } else {
      return res.status(404).send({ message: "user can't find" });
    }
  } catch (error) {
    res.status(401).send({ error: "Please authenticate." });
  }
};
