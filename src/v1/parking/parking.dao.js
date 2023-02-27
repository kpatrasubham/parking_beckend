const Parking = require('./parking.model');

const createParking = async ( ParkingObj ) => {
    return Parking.create( ParkingObj );
}

const updateParking = async ( ParkingObj, ParkingClauses ) => {
    return Parking.updateOne( ParkingClauses, ParkingObj );
}

const updateParkingById = async ( hotelUserId, ParkingObj ) => {
    return Parking.findByIdAndUpdate( hotelUserId, ParkingObj );
}

const disableParking = async ( ParkingClauses ) => {
    return Parking.updateOne( ParkingClauses );
}

const getParkingDetailsById = async ( hotelUserId ) => {
    return Parking.findById( hotelUserId ).populate('createdBy');
}

const getParkingDetailsByClause = async ( ParkingClauses ) => {
    return Parking.findOne( ParkingClauses ).populate('createdBy');
}

const getAllParkings = async ( ParkingClauses = undefined ) => {
    return Parking.find( ParkingClauses );
}
const checkParkingExist = async ( ParkingClauses = undefined ) => {
    return Parking.findOne( ParkingClauses );
}

module.exports = {
    createParking,
    updateParking,
    disableParking,
    getParkingDetailsById,
    getParkingDetailsByClause,
    getAllParkings,
    updateParkingById,
    checkParkingExist
}