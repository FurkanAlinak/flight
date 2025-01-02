const express = require('express'); // express çağrıldı
const app = express(); // express uygulaması oluşturuldu
require("dotenv").config(); // dotenv çağrıldı
const port = process.env.PORT || 3001; // port numarası belirlendi
app.use(express.json()); // express uygulamasına json desteği eklendi
app.use(express.urlencoded({ extended: true })); // express uygulamasına urlencoded desteği eklendi
require('./src/db/dbconnect'); // veritabanı bağlantısı yapıldı
const router = require('./src/routes/index'); // router çağrıldı
const errorHandler = require('./src/middlewares/errorHandler'); // errorHandler çağrıldı

app.use('/api', router); // '/api' dizinine gelen istekler için route

app.get('/', (req, res) => {
    res.json({ message: "Homepage" }); // '/' dizinine gelen istekler için cevap
});


app.get(errorHandler); // hata durumunda errorHandler fonksiyonu çağrıldı

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`); // sunucu başlatıldı
});