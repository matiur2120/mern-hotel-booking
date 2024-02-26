import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../model/user";

const router = express.Router();

router.post("/register", async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    if (user) {
      return res.status(400).json({ message: "User already exists!" });
    }
    const newUser = new User(req.body);
    await newUser.save();
    const token = jwt.sign(
      { userId: newUser._id },
      process.env.JWT_SECRET_KEY as string,
      { expiresIn: "1d" }
    );
    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 86400000,
    });
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

export default router;
