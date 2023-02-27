const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');

const UserSchema = new mongoose.Schema(
    {
        user_id: {
            type: String,
            required: true,
            default: uuidv4(),
            trim: true
        },
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            unique: true,
            lowercase: true
        },
        type: {
            type: String,
            required: true,
            unique: true
        },
        salt: {
            type: String,
            required: true
        },
        emailVerified: {
            type: Boolean,
            default: false
        },
        status: {
            type: String,
            enum: [ 'in-active', 'active', 'blocked', 'deleted' ],
            default: 'in-active'
        },
    },
    { collection: "Users" }
);

module.exports = mongoose.model("Users", UserSchema);