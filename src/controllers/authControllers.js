const { default: axios } = require('axios');
const flightModel = require('../models/flights'); // flights modeli çağrıldı
require("dotenv").config(); // dotenv çağrıldı
require('axios'); // axios çağrıldı
const APIError = require("../utils/error"); // APIError çağrıldı
const Response = require("../utils/response");
require("body-parser");

//Uçuş listeleme
const flightList = async (req, res,) => {
    try {
        const APIUrl = "https://api.schiphol.nl/public-flights/flights";
        const response = await axios.get(APIUrl, {
            headers: {
                "Accept": "application/json",
                "app_id": `${process.env.SC_ID_KEY}`,
                "app_key": `${process.env.SC_APP_KEY}`,
                "ResourceVersion": "v4"
            }
        });
        return new Response(response.data).success(res); // response data döndürüldü
    } catch (error) {
        throw new APIError(500, error.message); // hata durumunda APIError fırlatıldı
    }
}// flightList fonksiyonu oluşturuldu


//Uçuş ID'sine göre filtreleme
const flightId = async (req, res) => {
    try {
        const APIUrl = "https://api.schiphol.nl/public-flights/flights";
        const response = await axios.get(APIUrl, {
            headers: {
                "Accept": "application/json",
                "app_id": `${process.env.SC_ID_KEY}`,
                "app_key": `${process.env.SC_APP_KEY}`,
                "ResourceVersion": "v4"
            }
        });
        const flights = response.data.flights;
        const { id, } = req.params; // 

        // ID'ye göre filtreleme
        if (id) {
            const filteredFlight = flights.find(flight => flight.id === id);
            if (!filteredFlight) {
                return res.status(404).json({ message: 'Uçuş bulunamadı' });
            }
            return res.json(filteredFlight);
        }

    } catch (error) {
        console.error(error);
        throw new APIError(500, error.message);
    }
}//flightId fonksiyonu oluşturuldu

const flightListForScheduleTime = async (req, res) => {
    try {
        const APIUrl = "https://api.schiphol.nl/public-flights/flights";
        const response = await axios.get(APIUrl, {
            headers: {
                "Accept": "application/json",
                "app_id": `${process.env.SC_ID_KEY}`,
                "app_key": `${process.env.SC_APP_KEY}`,
                "ResourceVersion": "v4"
            }
        });
        const flight = response.data.flights;   
        const { scheduleTime } = req.params;
        if (scheduleTime) {
            const filteredFlight = flight.find(flight => flight.scheduleTime === scheduleTime);
            if (!filteredFlight) {
                return res.status(404).json({ message: 'Uçuş bulunamadı' });
            }
            console.log(filteredFlight);
            return res.json(filteredFlight);
        }
    } catch (error) {
        throw new APIError(500, error.message);
    }
}



//DB'den uçuş listeleme
const dbflightList = async (req, res) => {
    try {
        const flights = await flightModel.find();
        return new Response(flights).success(res);
    } catch (error) {
        throw new APIError(500, error.message);
    }
}// dbflightList fonksiyonu oluşturuldu

//DB'den uçuş silme
const flightDelete=async (req,res)=>{
    try {
        const flightId=req.params.id;
        const flight=await flightModel.findOneAndDelete(flightId);
        if(!flight){
            return res.status(404).json({message:"Uçuş bulunamadı"});
        }
        console.log("Uçuş silindi");
        return res.json({message:"Uçuş silindi"});
    } catch (error) {
        throw new APIError(500,error.message);
    }
}//flightDelete fonksiyonu oluşturuldu


const flightSaveToDB = async (req, res) => {
    try {
        const {flightNumber}=req.body;
        if(!flightNumber){
            return res.status(400).json({message:"Uçuş numarası giriniz"});
        }
        const APIUrl = "https://api.schiphol.nl/public-flights/flights";
        const response = await axios.get(APIUrl, {
            headers: {
                "Accept": "application/json",
                "app_id": `${process.env.SC_ID_KEY}`,
                "app_key": `${process.env.SC_APP_KEY}`,
                "ResourceVersion": "v4"
            }
        });
        const flights = response.data.flights;
        const filteredFlight = flights.find(flight => flight.flightNumber === flightNumber);
        if (!filteredFlight) {
            return res.status(404).json({ message: 'Uçuş bulunamadı' });
        }
        const restoreFlight = await flightModel.findOne({ flightNumber: flightNumber });
        if (restoreFlight) {
            return res.status(400).json({ message: 'Uçuş zaten kayıtlı' });
        }
        const newFlight = new flightModel({
            flightNumber: filteredFlight.flightNumber,
            flightName: filteredFlight.flightName,
            actualLandingTime: filteredFlight.actualLandingTime,
            aircraftType: {
                iataMain: filteredFlight.aircraftType.iataMain,
                iataSub: filteredFlight.aircraftType.iataSub
            },
            airlineCode: filteredFlight.airlineCode,
            estimatedLandingTime: filteredFlight.estimatedLandingTime,
            flightDirection: filteredFlight.flightDirection,
            isOperationalFlight: filteredFlight.isOperationalFlight,
            lastUpdatedAt: filteredFlight.lastUpdatedAt,
            mainFlight: filteredFlight.mainFlight,
            prefixIATA: filteredFlight.prefixIATA,
            prefixICAO: filteredFlight.prefixICAO,
            route: {
                destinations: filteredFlight.route.destinations,
                eu: filteredFlight.route.eu,
                visa: filteredFlight.route.visa
            },
            scheduleDate: filteredFlight.scheduleDate,
            scheduleDateTime: filteredFlight.scheduleDateTime,
            scheduleTime: filteredFlight.scheduleTime,
            serviceType: filteredFlight.serviceType,
            terminal: filteredFlight.terminal,
            randomPrice: filteredFlight.randomPrice
        })
        await newFlight.save();
        console.log(newFlight);
        return res.json(newFlight);
    } catch (error) {
        next(new APIError(500, error.message));
    }
}
    


module.exports = { flightList, flightId ,dbflightList,flightDelete,flightListForScheduleTime,flightSaveToDB}; // flightList fonksiyonu dışarı aktarıldı