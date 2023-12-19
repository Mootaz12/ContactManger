import express from "express";
import connection from "./db/dbConnection.mjs";
import userRouter from "./routes/userRoute.mjs";
import signupRouter from "./routes/signupRoute.mjs";
import signinRouter from "./routes/signinRoute.mjs";
import contactRouter from "./routes/contactRoute.mjs";
const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/signup", signupRouter);
app.use("/signin", signinRouter);
app.use("/contact", contactRouter);
connection().then(() =>
  app.listen("3000", () => console.log("server runnig on port 3000"))
);
