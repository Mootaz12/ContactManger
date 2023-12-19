import express from "express";
import bcrypt from "bcrypt";
import User from "../models/userModel.mjs";

const route = express.Router();

route.post("/", async function (req, res) {
  try {
    const { userName, password, email, phoneNumber } = req.body;
    const existingUserByEmail = await User.findOne({ email });
    const existingUserByPhone = await User.findOne({ phoneNumber });

    if (existingUserByEmail) {
      return res.status(409).json({ message: "Email already exists" });
    }

    if (existingUserByPhone) {
      return res.status(409).json({ message: "Phone number already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      userName,
      password: hashedPassword,
      email,
      phoneNumber,
      contacts: [],
    });

    if (newUser) {
      return res.status(201).json({ message: "New user created" });
    } else {
      return res.status(500).json({ error: "Failed to create user" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

export default route;
