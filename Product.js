const mongoose = require('mongoose')

mongoose.model("product", {
    productId: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    image: {
        type: String,
        required: true
    },
    seller: {
        type: String,
        require: true
    }
})

const Product = mongoose.model("product")

module.exports = Product