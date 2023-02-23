const Sequelize = require("sequelize");
const { sequelize } = require("../../../core/sqlConfig");

const { Zone } = require('./zone.model')
export const Space = sequelize.define(
  "Space",
  {
    parking_space_id: {
      allowull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },

    parking_space_title: {
      type:Sequelize.STRING,
      allowull:false
    },
    parking_zone_id:{
      type:Sequelize.INTEGER,
      allowull:false   
    },
     
  },
  {
    tableName: "parking_space",
    timestamps: false,
  }
);
Space.belogsTo(Zone,{
  foreignKey:'parking_zone_id'
})