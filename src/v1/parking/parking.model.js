const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;

const ParkingSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        vechile_no: {
            type: String,
            required: true,
        },
        parking_zone_id: {
            type: ObjectId,
            required: true,
            ref: 'Zone'
             
        },
        parking_space_id: {
            type: ObjectId,
            required: true,
            ref: 'Space'
             
        },
        booking_date_time: {
            type: Date,
            required: true
        },
        release_date_time: {
            type: Date,
            
             
        },
         
        isActive: {
            type: Boolean,
            default: false
        }, 
    },
    { collection: "Parkings" }
);

module.exports = mongoose.model("Parking", ParkingSchema);