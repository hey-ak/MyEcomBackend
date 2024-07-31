const express = require('express');
const { getOrders, addOrder, updateOrder } = require('../controllers/orderController');
const router = express.Router();

router.get('/order',getOrders);
router.post('/order',addOrder);
router.put('/order/:id',updateOrder)








module.exports = router