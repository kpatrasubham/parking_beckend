const joi = require("joi");

const ParkingSchemaValidation = joi.object({
    name: joi.string().trim(true).required(),
    vechile_no: joi.string().trim(true).required(),
    parking_zone_id: joi.string().trim(true).required(),
    parking_space_id: joi.string().trim(true).required(),
    booking_date_time: joi.date().required() 
.default([]),
    isActive: joi.boolean().default(true)
});

module.exports = {
    ParkingSchemaValidation
}