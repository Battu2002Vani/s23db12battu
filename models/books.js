const { Double } = require("mongodb")
const mongoose = require("mongoose")
const BooksSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true,
        min: 0,
        max: 30.0
    }
    })
module.exports = mongoose.model("books",BooksSchema)


