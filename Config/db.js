import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/contactDB");

    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDb;