const { Sequelize, Model } = require("sequelize");

const sequelize = new Sequelize("sql12596967", "sql12596967", "YfFtWtqcEL", {
  host: "sql12.freemysqlhosting.net",

  dialect:
    "mysql" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = { 
    sequelize
}
