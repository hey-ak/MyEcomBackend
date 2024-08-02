const express = require("express"); // import
require("dotenv").config();
const app = express(); // initialize
const authRouter = require("./routes/authRoutes");
const categoryRouter = require("./routes/categoryRoutes")
const productRouter = require("./routes/productRoutes")
const orderRouter = require("./routes/orderRoutes")
const reviewRouter = require("./routes/reviewRoutes")
const userRouter = require("./routes/userRoutes")
const mongoose = require("mongoose");

const PORT = process.env.PORT;
app.use(express.json())
app.use(authRouter);
app.use(productRouter);
app.use(categoryRouter);
app.use(orderRouter);
app.use(reviewRouter);
app.use(userRouter);

app.get("/", (request, response) => {
  // Route Define
  response.send("Hello");
});


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
