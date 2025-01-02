const router = require('express').Router(); // express router çağrıldı
const auth = require("./authRouter"); // authRouter çağrıldı

router.use(auth); // router'a authRouter eklendi

module.exports = router; // router dışarı aktarıldı