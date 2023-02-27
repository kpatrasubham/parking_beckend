const Zone = require('./zone.model');

const addZone = ( ZoneObj ) => {
    return Zone.create( ZoneObj );
}

const updateZoneById = ( ZoneId, ZoneObj ) => {
    return Zone.findByIdAndUpdate( ZoneId, ZoneObj );
}

const updateZoneByClause = ( ZoneClauses, ZoneObj ) => {
    return Zone.findOneAndUpdate( ZoneClauses, ZoneObj );
}

const getZonesByClause = ( ZoneClauses = undefined ) => {
    return Zone.find( ZoneClauses );
}

const getZoneById = ( ZoneId ) => {
    return Zone.findById( ZoneId );
}

const getZoneByClause = ( ZoneClauses ) => {
    return Zone.findOne( ZoneClauses );
}

module.exports = {
    addZone,
    updateZoneById,
    updateZoneByClause,
    getZonesByClause,
    getZoneById,
    getZoneByClause
};