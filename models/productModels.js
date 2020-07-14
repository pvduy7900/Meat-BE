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
    categoryID: [
        {
            type: mongoose.Schema.ObjectID,
            ref: "Category",
            required: "name is required"
        }
    ],
    description: {
    type: String,
    required: "name is required"
},
    preparing: {
    type: String,
    required: "name is required"
},
    review: [
    {
        type: mongoose.Schama.ObjectID,
        ref: "Review",
        required:"review is required"
    }
]
})

const Product = mongoose.model("Product", productSchema)
module.exports = Product;












