const Space = require("./space.model");

const createSpace = async (spaceObj) => {
  return Space.create(spaceObj);
};

const getSpaces = async (spaceObj = undefined) => {
  return Space.find(spaceObj);
};

const updateSpace = async (inventoryClauses, spaceObj) => {
  return Space.findOneAndUpdate(inventoryClauses, spaceObj, {
    upsert: true,
    new: true,
    setDefaultsOnInsert: true,
  });
};

module.exports = {
  createSpace,
  updateSpace,
  getSpaces,
};
