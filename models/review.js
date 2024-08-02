const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true},
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  reviewText: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  image: String,
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
