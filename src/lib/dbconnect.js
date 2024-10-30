import mongoose from "mongoose";

export async function createDB() {
  try {
    let connection;
    console.log("Creating database = ", connection?.connection);
    if (connection?.connection?.readystate != 1) {
      connection = mongoose.connect(process.env.MONGODB_URL);
    }

    console.log("Database connected ...");
  } catch (err) {
    console.log("Error connecting to MongoDB:", err);
  }
}
