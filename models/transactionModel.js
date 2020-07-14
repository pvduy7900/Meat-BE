const mongoose = require("mongoose")

const transactionSchema = mongoose.Schema({
    userID: {
        type: mongoose.Schema.ObjectID,
        ref:"User",
        required: [true, "userID is required"]
    },
    cartID: {
        type: mongoose.Schema.ObjectID,
        ref:"Cart",
        required: [true, "count is required"]
    }
})

const Transaction = mongoose.model("Transaction", transactionSchema)
module.exports = Transaction





