const mongoose = require("mongoose")

const reviewSchema = mongoose.Schema({
    userID: {
        type: mongoose.Schema.ObjectID,
        ref:"User",
        required: [true, "userID is required"]
    },
    productID: {
        type: mongoose.Schema.ObjectID,
        ref:"Product",
        required: [true, "count is required"]
    },
    comment:{
        type:String,
        required : [true,"comment is required"]
    },
    rating:{
        type:String,
        required:[true,"rating is required"]
    }
})

const Review = mongoose.model("Review", reviewSchema)
module.exports = Review;





