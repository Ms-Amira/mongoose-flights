const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema( {
    airport: { type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']},
    arrival: { type: Date, default: function() {
        return Date().getDate();
    } }
})

const flightsSchema = new mongoose.Schema({
    airline: { type: String,
    enum: ['American', 'Southwest', 'United', 'Delta']}, 
    airport: { type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']},
    flightNo: { type: Number, min: 10, max: 9999},
    departs: { type: Date, default: function() {
        return Date().getDate();
    } },
    destination: [destinationSchema]
})


module.exports = mongoose.model('Flight', flightsSchema);