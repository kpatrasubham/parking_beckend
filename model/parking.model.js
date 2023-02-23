const Sequelize = require("sequelize");
const { sequelize } = require("../../../core/sqlConfig");

const { Zone } = require("./zone.model");
const { Space } = require("./space.model");
export const Parking = sequelize.define(
  "Parking",
  {
    vehicle_parking_id: {
      allowull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },

    parking_zone_id: {
      type: Sequelize.INTEGER,
      allowull: false,
    },
    parking_space_id: {
      type: Sequelize.INTEGER,
      allowull: false,
    },
    booking_date_time: {
      type: Sequelize.DATE,
      allowull: false,
    },
    release_date_time: {
      type: Sequelize.DATE,
      allowull: false,
    },
  },
  {
    tableName: "parking_space",
    timestamps: false,
  }
);
Parking.belogsTo(Zone, {
  foreignKey: "parking_zone_id",
});
Parking.belogsTo(Space, {
  foreignKey: "parking_space_id",
});
