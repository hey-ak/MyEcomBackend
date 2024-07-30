const express = require('express');
const { getProducts,addProducts, getProductsByCategory, deleteProduct } = require('../controllers/productController');
const router = express.Router();
router.get('/products' , getProducts )
router.post('/products' , addProducts )
router.get('/products-by-category' , getProductsByCategory)
router.delete('/products/:productId', deleteProduct)


module.exports = router