const expressAsyncHandler = require('express-async-handler');
const Order = require('../model/OrderModel');

//============================| CREATE NEW ORDER | =====================
// @Route POST /api/order

const createOrder = expressAsyncHandler(async (req, res) => {
    const { fullName, weight, country, cost: constPerBox, colour } = req.body;

    if (!fullName || !weight || !country || !constPerBox || !colour)
        throw new Error("all fields must be required");
    try {
        const oneBoxCapacity = 3 //KG
        const totalBoxes = Math.ceil(weight / oneBoxCapacity)
        const totalCost = totalBoxes * constPerBox

        const order = await Order.create({
            fullName,
            weight,
            country,
            colour,
            constPerBox,
            totalBoxes,
            totalCost
        })
        res.status(200).json(order)
    } catch (error) {
        throw new Error(error.message)
    }
})
//============================| FETCH ALL ORDERS | =====================
// @Route GET /api/order

const fetchAllOrders = expressAsyncHandler(async (req, res) => {
    try {
        const order = await Order.find({})
        res.status(200).json(order)
    } catch (error) {
        throw new Error(error.message)
    }
})

module.exports = {
    createOrder,
    fetchAllOrders
}