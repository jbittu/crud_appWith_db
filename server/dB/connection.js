const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/projectForm")
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => {
    console.log(`Connection Failed ${err}`);
  });
