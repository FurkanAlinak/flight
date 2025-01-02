class APIError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
  }
}   // APIError sınıfı oluşturuldu
module.exports = APIError; // APIError sınıfı dışarı aktarıldı