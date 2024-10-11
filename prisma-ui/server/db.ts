import mongoose from "mongoose";

const dbConnect = async () => {
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(process.env.DATABASE_URL!, {});
    console.log("Mongo Connection successfully established.");
  } catch (e) {
    throw new Error("Error connecting to Mongoose");
  }
};

export default dbConnect;
