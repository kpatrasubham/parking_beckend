const express = require("express");
const router = express.Router();
const {
  addNewSpace,
  getSpaceDetailsById,
  updateSpace,
  updateSpaceStatus,
  getAllSpaces
} = require("./space.controller");

router.get("/", getAllSpaces);
router.post("/add", addNewSpace);
router.put("/update/:id", updateSpace);
router.patch("/status/update/:id", updateSpaceStatus);
router.get("/details/:id", getSpaceDetailsById);

module.exports = router;
