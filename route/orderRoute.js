const express = require('express')
const { createOrder,fetchAllOrders } = require('../controllers/orderController')
const router = express.Router()

//Create a new box data
router.post('/',createOrder)
//fetch all orders
router.get('/',fetchAllOrders)

module.exports = router