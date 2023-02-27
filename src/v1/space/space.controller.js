const { createSpace, updateSpace, getSpaces } = require("./space.dao");
const {
  errorResponse,
  successResponse,
} = require("../../../core/helpers/responseHandler");
const { SpaceSchemaValidation } = require("./space.schema");
const { getZonesByClause } = require("../zone/zone.dao");
const moment = require('moment');
const { getAllParkings, checkParkingExist } = require("../parking/parking.dao");
const addNewSpace = async (req, res) => {
  try {
    const SpaceObj = req.body;
    const { error } = SpaceSchemaValidation.validate(SpaceObj);
    if (error) {
      return errorResponse(res, error.message);
    }

    // SpaceObj['createdBy'] = req.hotelUserObj._id;
    const SpaceAdded = await createSpace(SpaceObj);
    if (!SpaceAdded) {
      return errorResponse(res, "Failed to add Space !");
    }

    return successResponse(res, "Space Added Successfully !");
  } catch (err) {
    return errorResponse(res, err.message);
  }
};
function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

const check = async (parkingObj) => {
  try {
    let check = await checkParkingExist({
      parking_zone_id: parkingObj.zone,
      parking_space_id: parkingObj.space,
      booking_date_time: parkingObj.time,
    });
     
    // if (check.length > 0) {
      return check;
    // } else {
    //   return null;
    // }
  } catch (error) {
    return false;
  }
};

const getAllSpaces = async (req, res) => {
  try {
    const zones = await getZonesByClause();
    let anyDate = req.query.date;
    let data = [];
    for (let index = 0; index < zones.length; index++) {
      const parking_zone_id = zones[index]._id;
      const Spaces = await getSpaces({ parking_zone_id });
      //   let main = JSON.parse(JSON.stringify(Spaces.map((e, i) => {
      //     e["booked"] = true
      //     return e;
      //   })))
      let managedData = [];
      Spaces.forEach(async (e) => {
        const b = e;
        let CurrentDate = moment().format('YYYY-MM-DD'); ;
        b["booked"] = await check({zone:parking_zone_id,space:b._id,time:anyDate? anyDate : CurrentDate});
        managedData.push(b);
      });
      let obj = {
        _id: parking_zone_id,
        parking_zone_title: zones[index].parking_zone_title,
        data: managedData,
      };
      data.push(obj);
    }
    if (!zones) {
      return errorResponse(res, "Failed to add Space !");
    }

    return successResponse(res, "Space get Successfully !", data);
  } catch (err) {
    return errorResponse(res, err.message);
  }
  //   res.send("dfg");
};

const addAllSpace = async (req, res) => {
  try {
    const SpaceObj = req.body;
    const { error } = SpaceSchemaValidation.validate(SpaceObj);
    if (error) {
      return errorResponse(res, error.message);
    }
    const SpaceAdded = null;
    // SpaceObj['createdBy'] = req.hotelUserObj._id;
    for (let index = 1; index < 31; index++) {
      var formattedNumber = ("0" + index).slice(-2);
      SpaceObj["parking_space_title"] = `C${formattedNumber}`;
      await createSpace(SpaceObj);
    }
    if (!SpaceAdded) {
      return errorResponse(res, "Failed to add Space !");
    }

    return successResponse(res, "Space Added Successfully !");
  } catch (err) {
    return errorResponse(res, err.message);
  }
};

const updateSpaces = async (req, res) => {
  try {
    const SpaceObj = req.body;
    const SpaceId = req.params.id;

    if (!SpaceId) {
      return errorResponse(res, "Space Id is required !");
    }

    const { error } = SpaceSchemaValidation.validate(SpaceObj);
    if (error) {
      return errorResponse(res, error.message);
    }

    const SpaceUpdated = await updateSpaceById(SpaceId, SpaceObj);
    if (!SpaceUpdated) {
      return errorResponse(res, "Failed to add Space !");
    }

    return successResponse(res, "Space Updated Successfully !");
  } catch (err) {
    return errorResponse(res, err.message);
  }
};

const updateSpaceStatus = async (req, res) => {
  try {
    const { isActive } = req.body;
    const SpaceId = req.params.id;

    if (!SpaceId) {
      return errorResponse(res, "Space Id is required !");
    }

    const SpaceUpdated = await updateSpaceById(SpaceId, { isActive });
    if (!SpaceUpdated) {
      return errorResponse(res, "Failed to update Space status !");
    }

    return successResponse(res, "Space Status Updated Successfully !");
  } catch (err) {
    return errorResponse(res, err.message);
  }
};

const getSpaceDetailsById = async (req, res) => {
  try {
    const SpaceId = req.params.id;
    if (!SpaceId) {
      return errorResponse(res, "Space Id is required !");
    }

    const SpaceDetails = await getSpaceById(SpaceId);
    if (!SpaceDetails) {
      return errorResponse(res, "Failed to get Space details !");
    }

    return successResponse(res, "Fetched Successfully !", {
      ...SpaceDetails.toObject(),
    });
  } catch (err) {
    return errorResponse(res, err.message);
  }
};

module.exports = {
  addNewSpace,
  updateSpace: updateSpaces,
  updateSpaceStatus,
  getSpaceDetailsById,
  getAllSpaces,
};
