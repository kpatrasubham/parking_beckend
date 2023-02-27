const joi = require("joi");

const SpaceSchemaValidation = joi.object({
    parking_space_title: joi.string().trim(true),
    parking_zone_id: joi.string().trim(true).required()
.default([]),
    isActive: joi.boolean().default(true)
});

module.exports = {
    SpaceSchemaValidation
}