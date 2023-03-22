const FlightModel = require('../models/flights');

module.exports = {
    new : newTicket
}

function newTicket(req, res) {
    Ticket.find({}).then(function (tickets) {
        res.render('ticket/new', {
            ticket: tickets
        });
    })
}
