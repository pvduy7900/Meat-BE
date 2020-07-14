const mongoose = require("mongoose")

const cartSchema = mongoose.Schema({
    userID: {
        type: mongoose.Schema.ObjectID,
        ref:"User",
        required :[true,"userID is required"]
    },
    items: [{
        productID:{
            type: mongoose.Schema.ObjectID,
            ref:"Product",
            required: [true,"productID is required"]
        },
        count:{
            type:Number,
            required: [true,"count is required"]
        }
    }]

})

const Cart = mongoose.model("Cart", cartSchema)
module.exports = Cart














