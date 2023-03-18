const mongoose = require('mongoose');

const flightsSchema = new mongoose.Schema({
    airline: { type: String,
    enum: ['American', 'Southwest', 'United', 'Delta']}, 
    airport: { type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']},
    flightNo: { type: Number, min: 10, max: 9999},
    departs: { type: Date, default: function() {
        return Date().getDate();
    } }
})

module.exports = mongoose.model('Flight', flightsSchema);