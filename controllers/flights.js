const FlightModel = require('../models/flights');
const Ticket = require('../models/ticket');

module.exports = {
    new: newFlight,
    create,
    index,
    show
}


function newFlight(req, res) {
    res.render('flights/new')
}

function create(req, res) {
    FlightModel.create(req.body).then(function(newFlights) {
        console.log(newFlights, '<- flight document')
        res.redirect('/flights');
    })
}

function index(req, res) {
    FlightModel.find({}).then(function(allFlights) {
        console.log(allFlights, '<- data from the db')
        res.render('flights/index', {flights: allFlights})
    }
)}

function show(req, res) {
   FlightModel.findById(req.params.id).then(function(flight) {Ticket.find({flight: flight._id}).then(function(tickets) {
    console.log(flight, '<- data from the db')
    res.render('flights/show', {flight: flight, ticket: tickets})
   })
   })

}
