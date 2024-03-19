import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import config from "./utils/config.js";
import personRouter from "./routes/personRouter.js";

const app = express();
const connectToDB = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(`Error connecting to DB: ${error}`);
  }
};

connectToDB(config.MONGODB_URI);

app.use(cors());
app.use(express.json());
app.use(express.static("dist"));
app.use("/api/persons", personRouter);

export default app;