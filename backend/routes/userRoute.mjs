import express from "express";
import bcrypt from "bcrypt";
import User from "../models/userModel.mjs";

const route = express.Router();
route.get("/", async function (req, res) {
  const users = await User.find();
  res.status(200).json({ users: users });
});
route.get("/:userId", async function (req, res) {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ user: user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
route.patch("/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const { userName, email, password, phoneNumber } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.findByIdAndUpdate(
      userId,
      { userName, email, password: hashedPassword, phoneNumber },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});
export default route;
