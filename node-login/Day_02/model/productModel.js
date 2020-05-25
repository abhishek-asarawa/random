const mongoose = require('mongoose');

productSchema = mongoose.Schema;

Product = new productSchema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    timesSold: {
        type: Number,
        default: 0,
    },
    dealer: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('product', Product);