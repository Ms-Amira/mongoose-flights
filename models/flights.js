const mongoose = require('mongoose');

const flightsSchema = new mongoose.Schema({
    airline: {
        type: String,
    enum: []}, 
    airport: String,
    flightNo: Number,
    departs: Date
})