const Sequelize = require("sequelize");
const { sequelize } = require("../core/sqlConfig");

const User = sequelize.define(
  "user",
  {
    user_id: {
      allowull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },

    name: {
      type: Sequelize.STRING,
      allowull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowull: false,
    },
    type: {
      type: Sequelize.STRING,
      allowull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      default: new Date(),
    },
    updated_at: {
      type: Sequelize.DATE,
      default: new Date(),
    },
  },
  {
    tableName: "user",
    timestamps: false,
  }
);
module.exports = User;