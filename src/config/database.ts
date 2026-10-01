import mongoose from "mongoose";

export const connectDb = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "");
    console.log("Mongodb connected successfully!!");
  } catch (error) {
    console.error("Mongodb connection failed :", error);
    process.exit(1);
  }
};
