const {
  createParking,
  disableParking,
  getAllParkings,
  getParkingDetailsByClause,
  getParkingDetailsById,
  updateParking,
  updateParkingById,
} = require("./parking.dao");
const {
  errorResponse,
  successResponse,
} = require("../../../core/helpers/responseHandler");
const { createInventory, updateInventory } = require("../space/space.dao");
const { ParkingSchemaValidation } = require("./parking.schema");
const moment = require("moment");

const getParkingList = async (req, res) => {
  try {
    let date  = req.query.date
    let data = await getAllParkings({booking_date_time:date});
    return successResponse(res, "Parking get Successfully !", data);
  } catch (error) {
    return errorResponse(res, err.message);
  }
};

const addNewParking = async (req, res) => {
  try {
    const parkingObj = req.body;
    const { error } = ParkingSchemaValidation.validate(parkingObj);
    if (error) {
      return errorResponse(res, error.message);
    }

    let check = await getAllParkings({
      parking_zone_id: parkingObj.parking_zone_id,
      parking_space_id: parkingObj.parking_space_id,
      booking_date_time: parkingObj.booking_date_time,
    });
    // parkingObj['createdBy'] = req.hotelUserObj._id;
 
    if (check.length > 0) {
      return errorResponse(res, "Parking slot already booked.");
    }
    const parkingAdded = await createParking(parkingObj);
    if (!parkingAdded) {
      return errorResponse(res, "Failed to add parkings !");
    }

    return successResponse(res, "Parking Added Successfully !");
  } catch (err) {
    return errorResponse(res, err.message);
  }
};

const updateParkingDetails = async (req, res) => {
  try {
    const parkingObj = req.body;
    const parkingId = req.params.id;
    const { error } = ParkingSchemaValidation.validate(parkingObj);
    if (error) {
      return errorResponse(res, error.message);
    }

    const parkingUpdated = await updateParkingById(parkingId, parkingObj);
    if (!parkingUpdated) {
      return errorResponse(res, "Failed to update parkings !");
    }

    return successResponse(res, "Parking Updated Successfully !");
  } catch (err) {
    return errorResponse(res, err.message);
  }
};

const updateParkingStatus = async (req, res) => {
  try {
    const { isActive } = req.body;
    const parkingId = req.params.id;

    const parkingUpdated = await updateParkingById(parkingId, { isActive });
    if (!parkingUpdated) {
      return errorResponse(res, "Failed to update parkings !");
    }

    return successResponse(res, "Parking Update Successfully !");
  } catch (err) {
    return errorResponse(res, err.message);
  }
};

const getParkingDetails = async (req, res) => {
  try {
    const parkingId = req.params.id;

    const parkingDetails = await getParkingDetailsById(parkingId);
    if (!parkingDetails) {
      return errorResponse(res, "Failed to get parkings details !");
    }

    return successResponse(res, "Parking Details Fetched Successfully !", {
      ...parkingDetails.toObject(),
    });
  } catch (err) {
    return errorResponse(res, err.message);
  }
};

const updateParkingPrice = async (req, res) => {
  try {
    const parkingId = req.params.id;
    const { currentPrice, date } = req.body;

    const inventoryObj = {
      parkingId: parkingId,
      currentPrice: currentPrice,
      date: date,
    };
    const inventoryClauses = {
      parkingId: parkingId,
      date: date,
    };
    const inventoryAdded = await updateInventory(
      inventoryClauses,
      inventoryObj
    );
    if (!inventoryAdded) {
      return errorResponse(res, "Failed to update parking price !");
    }

    return successResponse(res, "Parking Price Updated Successfully !");
  } catch (err) {
    return errorResponse(res, err.message);
  }
};

module.exports = {
  addNewParking,
  updateParkingDetails,
  updateParkingStatus,
  getParkingDetails,
  updateParkingPrice,
  getParkingList,
};
