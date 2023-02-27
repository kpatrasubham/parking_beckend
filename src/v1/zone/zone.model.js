const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');

const ZoneSchema = new mongoose.Schema(
    {
        parking_zone_id: {
            type: String,
            default: uuidv4(),
            trim: true
        },
        parking_zone_title: {
            type: String,
            default: 'demo'
        },
       
        
        isActive: {
            type: Boolean,
            default: true
        },
        
    },
    { 
        collection: "Zone",
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
);

module.exports = mongoose.model("Zone", ZoneSchema);