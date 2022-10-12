const mongoose = require('mongoose')

//CREATE USER SCHEMA
const orderSchema = new mongoose.Schema(
    {
        fullName: {
            required: [true, "First name is required"],
            type: String,
        },
        colour: {
            required: [true, "colour is required"],
            type: String,
        },
        weight: {
            required: [true, "weight is required"],
            type: Number,
        },
        country: {
            required: [true, "country is required"],
            type: String,
        },
        constPerBox: {
            required: [true, "cost per box is required"],
            type: Number,
        },
        totalCost: {
            required: [true, "total cost is required"],
            type: Number,
        },
        totalBoxes: {
            type: Number,
            default:1
        },
       

    },
    {
        toJSON: {
            virtuals: true,
        },
        toObject: {
            virtuals: true,
        },
        timestamps: true,
    }
);

//Compile schema into model
const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
