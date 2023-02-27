const joi = require("joi");

const UserSchemaValidation = joi.object({
  name: joi.string().alphanum().min(3).max(25).trim(true).required(),
  email: joi.string().email().trim(true).required(),
  password: joi.string().min(8).trim(true).optional(),
  emailVerified: joi.boolean().optional(),
  status: joi.string().optional().default([]),
  status: joi.string().default("active"),
});

module.exports = {
  UserSchemaValidation,
};
