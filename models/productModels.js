const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: "name is required"
    },
    price: {
        type: Number,
        required: "name is required"
    },
    categoryID: 
        {
            type: mongoose.Schema.ObjectId,
            ref: "Category",
            required: "name is required"
        }
    ,
    description: {
        type: String,
        required: "name is required"
    },
    preparing: {
        type: String,
        required: "name is required"
    },img: {
        type: String,
        required: "img is required"
    }
    // review: [
    //     {
    //         type: mongoose.Schema.ObjectID,
    //         ref: "Review",
    //         required: "review is required"
    //     }
    // ]
})

const Product = mongoose.model("Product", productSchema)
module.exports = Product;












