const mongoose = require('mongoose');

const testsInlab = new mongoose.Schema({
    testNames: {
        img: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    }
});

mongoose.model('Test', testsInlab);
