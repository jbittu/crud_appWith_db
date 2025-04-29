const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,  
  })
  .then(() => {
    console.log("MongoDB Atlas connected successfully");
  })
  .catch((err) => {
    console.log(`MongoDB connection error: ${err}`);
  });