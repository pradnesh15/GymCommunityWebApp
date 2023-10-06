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
        price: String
    }
});

mongoose.model('Test', testsInlab);
