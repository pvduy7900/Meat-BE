const mongoose = require("mongoose")

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "category is required"],
        unique: true
    },
    code: {
        type: String,
        required: [true, "category is required"],
        unique: true
    }

})

const Category = mongoose.model("Category", categorySchema)
module.exports = Category;





