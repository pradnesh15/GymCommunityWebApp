const mongoose = require('mongoose');
const openingTimeSchema = new mongoose.Schema({
    days: {
      type: String,
      required: true
    },
    opening: String,
    closing: String,
    closed: {
      type: Boolean,
      required: true
    }
  });

const reviewSchema = new mongoose.Schema({
    author: String,
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    reviewText: String,
    createdOn: {
        type: Date,
        'default': Date.now
    }
});


const locationsName = new mongoose.Schema({
    locations: {
        name: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            'default': 0,
            min: 0,
            max: 5
                }, 
        address: String,
        dist: String,
        openingTimes: [openingTimeSchema],
        reviews: [reviewSchema]
    }
});
mongoose.model('Location', locationsName);