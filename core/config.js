require('dotenv').config();

module.exports = {
    dbURL: process.env.DBURL,
    port: process.env.PORT || 4242,
}