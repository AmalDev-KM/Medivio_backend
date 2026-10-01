import dotenv from "dotenv";
import app from "./app.js";
import { connectDb } from "./config/database.js";

dotenv.config();
const PORT = process.env.PORT || 6000;

const startServer = async (): Promise<void> => {
  try {
    await connectDb();

    app.listen(PORT, () => {
      console.log(`Server listning to PORT ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting the server :", error);
    process.exit(1);
  }
};

startServer();
