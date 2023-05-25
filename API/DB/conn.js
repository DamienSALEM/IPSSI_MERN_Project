const mongoose = require("mongoose");
const db = process.env.DB_URL;

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(db);
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
