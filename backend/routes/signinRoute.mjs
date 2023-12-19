import express from "express";
import bcrypt from "bcrypt";
import User from "../models/userModel.mjs";
const route = express.Router();

route.post("/", async function (req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({ message: "user signed in " });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.error(error);
  }
});

export default route;
