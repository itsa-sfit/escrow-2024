import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import { UserModel } from "./model.js";

import jwt from "jsonwebtoken";

const generateToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "2d" });
};

// Backend PORT
const port = process.env.PORT || 4000;

// Express App
const app = express();
app.use(cors());

// Middleware: To get the request body
app.use(express.json());

// Middleware: To console log incoming requests
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.post("/register", async (req, res) => {
  const { name, email, phone, storyline } = req.body;
  if (!name || !email || !phone || !storyline) {
    return res.status(400).json({ message: "Missing Credentials" });
  }
  const user = await UserModel.findOne({ email });
  console.log(user);
  if (user) {
    return res.status(400).json({ message: "email already exist" });
  }
  try {
    const user = await UserModel.create({
      name,
      email,
      phone,
      storyline,
      password: phone,
    });
    const token = generateToken(user._id);
    return res
      .status(200)
      .json({ _id: user._id, username: user.username, token });
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "username and password required" });
  }
  const user = await UserModel.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: "invalid username" });
  } else {
    if (user.password === password) {
      const token = generateToken(user._id);
      return res
        .status(200)
        .json({ _id: user._id, username: user.username, token });
    } else {
      return res.status(400).json({ message: "passeord doesn't match" });
    }
  }
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)

  // If Successful
  .then(() => {
    console.log("Connection success");
    // Listen to request
    app.listen(port, () => {
      console.log(`Server listening to port ${port}`);
    });
  })

  // If Failed
  .catch((err) => {
    console.log(err);
  });
