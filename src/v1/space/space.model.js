const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;

const SpaceSchema = new mongoose.Schema(
    {
        // parking_space_id: {
        //     type: ObjectId,
        //     required: true,
        //     ref: 'Room'
        // },
        parking_space_title: {
            type:  String,
            required: true
        },
        parking_zone_id: {
            type: ObjectId,
            required: true,
            ref: 'Zone'
        },
        isActive: {
            type: Boolean,
            default: true
        },
        booked: {
            type:Object,
            default:false
        }
    },
    { 
        collection: "Spaces",
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
);

module.exports = mongoose.model("Space", SpaceSchema);