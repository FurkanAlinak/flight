const mongoose = require('mongoose');// mongoose modülü import edildi
require("dotenv").config();// dotenv modülü import edildi

const flightSchema = new mongoose.Schema({

    flightNumber: String,
    flightName: String,
    actualLandingTime: Date,
    aircraftType: {
        iataMain: String,
        iataSub: String
    },
    airlineCode: Number,
    estimatedLandingTime: Date,
    flightDirection: String,
    isOperationalFlight: Boolean,
    lastUpdatedAt: Date,
    mainFlight: String,
    prefixIATA: String,
    prefixICAO: String,
    route: {
        destinations: [String],
        eu: String,
        visa: String
    },
    scheduleDate: String,
    scheduleDateTime: Date,
    scheduleTime: String,
    serviceType: String,
    terminal: Number,
    randomPrice: Number,
},
    { collection: 'flights', timestamps: true })// flights şeması oluşturuldu (scheduleDateTime, flightNumber, flightName, terminal alanları içerir
const flightModel = mongoose.model('flights', flightSchema); // flights modeli oluşturuldu

module.exports = flightModel; // flights modeli dışa aktarıldı