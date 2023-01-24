import mongoose from 'mongoose';

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