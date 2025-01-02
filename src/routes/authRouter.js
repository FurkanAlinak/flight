const router = require('express').Router();
const { flightList,flightId, dbflightList,flightDelete ,flightListForScheduleTime,flightSaveToDB} = require('../controllers/authControllers');// flightControllers çağrıldı


router.get("/flight/list",flightList)
router.get("/flight/list/:id", flightId);
router.get("/flight/list/scheduleTime/:scheduleTime",flightListForScheduleTime);
router.post("/flight/save", flightSaveToDB);
router.get("/dblist", dbflightList);
router.delete("/dblist/delete/:id", flightDelete);


module.exports = router;