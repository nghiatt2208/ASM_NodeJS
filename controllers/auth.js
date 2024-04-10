import AuthModel from "../models/auth.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const Register = async (req, res) => {
  try {
    const body = req.body;

    const checkEmail = await AuthModel.findOne({ email: body.email });
    if (checkEmail !== null) {
      res.send({ status: false, message: "Email already exists" });
    } else {
      body.password = await bcrypt.hash(body.password, 10);
      const auth = await new AuthModel(body).save();
      auth.password = undefined;
      res.send({ status: true, message: "Register success", auth: auth });
    }
  } catch (error) {
    res.send({ message: `Error: ${error.message}` });
  }
};
export const Login = async (req, res) => {
  const body = req.body;
  try {
    const auth = await AuthModel.findOne({ email: body.email });
    if (auth !== null) {
      const verify = await bcrypt.compare(body.password, auth.password);
      if (verify) {
        const token = await jwt.sign({ uid: auth._id }, "123456");
        auth.password = undefined;
        res.send({
          status: true,
          message: "Login success",
          auth: auth,
          token: token,
        });
      } else {
        res.send({ status: false, message: "Password not match" });
      }
    }
  } catch (error) {
    res.send({ message: `Error: ${error.message}` });
  }
};
