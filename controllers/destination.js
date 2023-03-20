const FlightModel = require('../models/flights');

module.exports = {
    create
}

function create(req, res) {
    FlightModel.findById(req.params.id).then(function(flightDocument) {
        flightDocument.destination.push(req.body);
        flightDocument.save().then(function() {
            res.redirect(`/flights/${req.params.id}`)
        })
    })
}