// import mongoose from "mongoose";

import mongoose from "mongoose"

// export async function createDB() {
//   try {
//     let connection;
//     console.log("Creating database = ", connection?.connection);
//     if (connection?.connection?.readystate != 1) {
//       connection = mongoose.connect(process.env.MONGODB_URL);
//     }

//     console.log("Database connected ...");
//   } catch (err) {
//     console.log("Error connecting to MongoDB:", err);
//   }
// }


export async function connectDB() {

  try{
    let connection;
    console.log("connection?.connection " , connection?.connection)
    if (connection?.connection?.readyState != 1) {
      connection = await mongoose.connect(process.env.MONGODB_URL)
      console.log("MongoDB Connected... ")
    }
  }
  catch(err) {
    console.log("Error connecting Mongo DB is =>>> " , err)
  }
}