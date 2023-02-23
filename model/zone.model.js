const Sequelize = require("sequelize");
const { sequelize } = require("../../../core/sqlConfig");


export const Zone = sequelize.define(
  "Zone",
  {
    parking_zone_id: {
      allowull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },

    parking_zone_title: {
      type:Sequelize.STRING,
      allowull:false
    },
    created_at:{
      type:Sequelize.DATE,
      default:new Date()
    },
    updated_at:{
      type:Sequelize.DATE,
      default:new Date()
    }
  },
  {
    tableName: "parking_zone",
    timestamps: false,
  }
);
