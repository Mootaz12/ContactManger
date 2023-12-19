import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectionDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.DB_CONNECTION);
    console.log("conntecd");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
mongoose.set("autoIndex", false);
export default connectionDB;
