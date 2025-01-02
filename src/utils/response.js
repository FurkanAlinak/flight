class Response {
    constructor(data = null, message = null, status) {
        this.data = data,
            this.massage = message,
            this.status = status
    }
    success(res) {
        return res.status(200).json({
            status: this.status || 200,
            data: this.data,
            message: this.massage || "Success"
        });
    }
    error(res) {
        return res.status(500).json({
            status: this.status || 500,
            message: this.massage || "Internal Server Error"
        });
    }
    created(res) {
        return res.status(201).json({
            succes: true,
            data: this.data,
            message: this.massage ?? "İşlem Başarılı"
        })
    }
}// Response sınıfı oluşturuldu

module.exports = Response; // Response sınıfı dışarı aktarıldı