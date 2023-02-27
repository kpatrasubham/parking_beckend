const express = require("express");
const router = express.Router();
router.get('/l', (req, res) => {
  res.send("sdf");
});
const Zone = require("./zone/zone.route");
router.use("/zone", Zone);

const Space = require("./space/space.route");
router.use("/space", Space);

const Parking = require("./parking/parking.route");
router.use("/parking", Parking);

// const user = require('./user/');
// router.use( '/user', user );

// const common = require('./common/common.route');
// router.use( '/', common );

module.exports = router;
