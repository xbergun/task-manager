//? Modules
import mongoose from 'mongoose';

//? Connect to MongoDB database and log the status of connection to console
const connectToDb = async () => {
    mongoose.set("strictQuery", true);
    await mongoose
      .connect(process.env.MONGO_URI)
      .then(() => {
        console.log("MongoDB connected");
      })
      .catch((err) => {
        console.log(err);
      });
}

export default connectToDb;