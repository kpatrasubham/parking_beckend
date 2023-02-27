const joi = require("joi");

const ZoneSchemaValidation = joi.object({
    parking_zone_id: joi.string().trim(true),
    parking_zone_title: joi.string().trim(true).required()
.default([]),
    isActive: joi.boolean().default(true)
});

module.exports = {
    ZoneSchemaValidation
}