const express = require('express');
const router = express.Router();
const { addNewParking, getParkingDetails, updateParkingDetails, updateParkingStatus, updateParkingPrice, getParkingList } = require('./parking.controller');
// const { } = require('../../../core/helpers/jwtHelper');

router.get( '/',  getParkingList );
router.post( '/add',  addNewParking );
router.put( '/update/:id',  updateParkingDetails );
router.patch( '/status/update/:id',  updateParkingStatus );
router.patch( '/price/update/:id',  updateParkingPrice );
router.get( '/details/:id',  getParkingDetails );

module.exports = router;