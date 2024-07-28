const express = require("express"); // import
require("dotenv").config();
const app = express(); // initialize
const authRouter = require("./routes/authRoutes");
const mongoose = require("mongoose");

const PORT = process.env.PORT;

app.use(authRouter);

app.get("/", (request, response) => {
  // Route Define
  response.send("Hello");
});
mongoose.connect(process.env.DBURL);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DBURL);
    console.log("DB Connection Successfull");
  } catch (error) {
    console.log(error);
  }
};

connectDB()
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
