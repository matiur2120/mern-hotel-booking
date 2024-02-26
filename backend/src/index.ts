import cors from "cors";
import "dotenv/config";
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import userRouter from "./routes/users";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose
  .connect(process.env.MONGO_CONNECTION_STRING as string)
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log(err.message);
  });
app.get("/api/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello from express endpoint" });
});

app.use("/api/user", userRouter);

app.listen(7000, () => {
  console.log("Server running on localhost:7000");
});
