const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Donation = new Schema({
    id_donor: [String], //doador
    id_receptor: [String], //recebedor
    items: []
});

module.exports = mongoose.model('Donation', Donation);