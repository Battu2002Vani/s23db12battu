const mongoose = require("mongoose")
const BooksSchema = mongoose.Schema({
name: String,
author: String,
cost: Number
})
module.exports = mongoose.model("books",BooksSchema)


