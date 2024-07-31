const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    quantity: Number,
    address: String,
    mobileNo: String,
    pincode: String,
    paymentMethod: String,
    country: String,
    status: {
      type: String,
      default: "Placed",
    },
    userId: mongoose.Schema.Types.ObjectId,
    productId: mongoose.Schema.Types.ObjectId,
  },
  { timestamps: true }
);
const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
