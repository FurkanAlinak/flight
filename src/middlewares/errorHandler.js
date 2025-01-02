const APIError =require("../utils/error");

const errorHandler = (err, req, res, next) => {
    if (err instanceof APIError) {
        return res.status(err.statusCode).json({ message: err.message });
    }
    return res.status(500).json({ 
        message: "Internal Server Error" ,
        error: err.message,
        success: false
    });
}// errorHandler fonksiyonu oluşturuldu
module.exports = errorHandler; // errorHandler fonksiyonu dışarı aktarıldı