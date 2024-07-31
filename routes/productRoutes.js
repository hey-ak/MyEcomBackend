const express = require('express');
const { getProducts,addProducts, getProductsByCategory, deleteProduct, updateProduct } = require('../controllers/productController');
const router = express.Router();
router.get('/products' , getProducts )
router.post('/products' , addProducts )
router.get('/products-by-category' , getProductsByCategory)
router.delete('/products/:productId', deleteProduct)
router.put('/products/:productId',updateProduct)


module.exports = router