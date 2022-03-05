import mongoose from "mongoose";

const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  mongoose
    .connect(process.env.MONGO_DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => console.log("Connected to DB"))
    .catch((e) => {
      console.log({ error: e });
    });
};

export default dbConnect;
