/* eslint-disable no-console */
const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    const uri = process.env.MONGO_URI;
    const mongoConnection = await mongoose.connect(uri);

    console.log(
      `MongoDB Connected: ${mongoConnection.connection.host}`,
    );
  } catch (error) {
    console.log(`MongoDB connection error: ${error}`);
    process.exit(1);
  }
};

module.exports = connectDb;
