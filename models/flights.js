const mongoose = require('mongoose');

const flightsSchema = new mongoose.Schema({
    airline: { type: String,
    enum: ['American', 'Southwest', 'United', 'Delta']}, 
    airport: { String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']},
    flightNo: {
        Number, min: 10, max: 9999},
    departs: Date
})

module.exports.mongoose.model('Flight', flightsSchema);