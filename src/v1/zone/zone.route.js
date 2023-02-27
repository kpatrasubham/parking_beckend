const express = require('express');
const router = express.Router();
const { addNewZone, getZoneDetailsById, updateZone, updateZoneStatus } = require('./zone.controller');


router.post('/add', addNewZone);
router.put('/update/:id', updateZone);
router.patch('/status/update/:id', updateZoneStatus);
router.get('/details/:id', getZoneDetailsById);

module.exports = router;