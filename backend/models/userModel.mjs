import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  contact: [
    {
      fullName: {
        type: String,
        required: true,
      },
      email: {
        type: String,
      },
      phoneNumber: {
        type: String,
        required: true,
        unique: true,
      },
      notes: {
        type: String,
      },
    },
  ],
});

const User = mongoose.model("User", userSchema);

export default User;
