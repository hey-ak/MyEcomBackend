const { mongo } = require("mongoose");
const Review = require("../models/review")

const getReviews = async(request,response) =>{
   try {const reviews = await Review.find({});
    if (reviews.length === 0) {
        return response.json({
          msg: "No Reviews Found",
          error: false,
          reviews: [],
        });
      }

      return response.json({
          reviews,
        msg:"Review Fetched SuccessFully",
        error:false
      })}catch(error){
        console.log(error);
       return response.json({
        msg:"Something Went Wrong",
        error:true

       })
      }

}

const addReview = async (request, response) => {
    try {
      const { userId, productId, reviewText, rating } = request.body;
      const newReview = new Review({
        userId,
        productId,
        reviewText,
        rating,
        createdAt: new Date(),
      });
  
      await newReview.save();
      
      return response.json({
        msg: "Review Added Successfully",
        error: false,
        review: newReview,
      });
    } catch (error) {
        console.log(error);
      return response.json({
        msg: "Something Went Wrong",
        error: true,
      });
    }
  };

  const updateReview = async (request, response) => {
    try {
        const {reviewId} = request.params;
      const {  reviewText, rating } = request.body;
      const updatedReview = await Review.findByIdAndUpdate(
        reviewId,
        { reviewText, rating, updatedAt: new Date() },
        { new: true }
      );
  
      if (!updatedReview) {
        return response.json({
          msg: "Review Not Found",
          error: true,
        });
      }
  
      return response.json({
        msg: "Review Updated Successfully",
        error: false,
        review: updatedReview,
      });
    } catch (error) {
      return response.json({
        msg: "Something Went Wrong",
        error: true,
      });
    }
  };
  const deleteReview = async (request, response) => {
    try {
      const { reviewId } = request.params;
      const deletedReview = await Review.findByIdAndDelete(reviewId);
  
      if (!deletedReview) {
        return response.json({
          msg: "Review Not Found",
          error: true,
        });
      }
  
      return response.json({
        msg: "Review Deleted Successfully",
        error: false,
      });
    } catch (error) {
      return response.json({
        msg: "Something Went Wrong",
        error: true,
      });
    }
  };

  module.exports = {addReview,getReviews,updateReview,deleteReview}
  