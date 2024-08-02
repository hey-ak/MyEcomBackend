const express = require('express');
const { getReviews, addReview, updateReview, deleteReview } = require('../controllers/reviewController');
const router = express.Router();


router.get('/review',getReviews);
router.post('/review',addReview);
router.put('/review/:reviewId',updateReview);
router.delete('/review/:reviewId',deleteReview);


module.exports = router