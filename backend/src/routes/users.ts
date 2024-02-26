import express, { Request, Response } from "express";
import User from "../model/user";

const router = express.Router();

router.get("/register", async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    if (user) {
      return res.status(400).json({ message: "User already exists!" });
    }
    const newUser = new User(req.body);
    await newUser.save();
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Something went wrong!" });
  }
});

export default router;
