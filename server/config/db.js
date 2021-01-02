import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });

    console.log(`Connection successful: ${conn.connection.host}`);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

export default connectDB;
