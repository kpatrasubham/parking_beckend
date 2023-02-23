 const {sequelize} = require('./sqlConfig')

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit();
  }
};

connectDB();

module.exports = { sequelize };
