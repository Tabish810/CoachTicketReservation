var express = require('express');
var router = express.Router();
var records = require('./api/application/DriversRecord');
var coach_records = require('./api/application/CoachInfo');
var all_records = require('./api/application/AllRecords');
var login = require('./api/application/Login');

        // Login Collection
router.post('/getLogin',login.getLogin);
router.put('/passUpdate',login.passUpdate);

        // Drivers Record Collection
router.post('/addDriversRecord',records.saveData);
router.get('/getDriversRecord',records.getData);
router.delete('/deleteDriversRecord/:id',records.deleteData);
router.put('/updateDriversRecord/:id',records.updateDriverInfo);

        // Coach Info Collection
router.post('/addCoachInfo',coach_records.saveData);
router.get('/getCoachInfo',coach_records.getData);
router.get('/getDloc',coach_records.getDloc);
router.get('/getTime',coach_records.getTime);
router.get('/getCoach',coach_records.getCoach);
router.delete('/deleteCoachInfo/:id',coach_records.deleteData);
router.put('/updateCoachRecords/:id',coach_records.updateCoachInfo);

        // All Records Collection
router.post('/AllRecords',all_records.saveData);
router.get('/getAllRecords',all_records.getData);
router.get('/getDataBy',all_records.getDataBy);
router.delete('/cancelSeat/:ticket_number',all_records.deleteData);

module.exports = router;