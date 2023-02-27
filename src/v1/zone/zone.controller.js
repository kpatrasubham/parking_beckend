const { addZone, getZoneByClause, getZoneById, getZonesByClause, updateZoneByClause, updateZoneById } = require('./zone.dao');
const { errorResponse, successResponse } = require('./../../../core/helpers/responseHandler');
const { ZoneSchemaValidation } = require('./zone.schema');

const addNewZone = async( req, res ) => {
    try {
        const ZoneObj = req.body;
        const { error } = ZoneSchemaValidation.validate( ZoneObj );
        if( error ) {
            return errorResponse( res, error.message )
        }

        // ZoneObj['createdBy'] = req.hotelUserObj._id;
        const ZoneAdded = await addZone( ZoneObj );
        if( !ZoneAdded ) {
            return errorResponse( res, "Failed to add Zone !" )
        }

        return successResponse( res, "Zone Added Successfully !" )
    }
    catch( err ) {
        return errorResponse( res, err.message )
    }
}

const updateZone = async( req, res ) => {
    try {
        const ZoneObj = req.body;
        const ZoneId = req.params.id;

        if( !ZoneId ) {
            return errorResponse( res, "Zone Id is required !" )
        }

        const { error } = ZoneSchemaValidation.validate( ZoneObj )
        if( error ) {
            return errorResponse( res, error.message );
        }

        const ZoneUpdated = await updateZoneById( ZoneId, ZoneObj );
        if( !ZoneUpdated ) {
            return errorResponse( res, "Failed to add Zone !" )
        }

        return successResponse( res, "Zone Updated Successfully !" )
    }
    catch( err ) {
        return errorResponse( res, err.message )
    }
}

const updateZoneStatus = async( req, res ) => {
    try {
        const { isActive } = req.body;
        const ZoneId = req.params.id;
    
        if( !ZoneId ) {
            return errorResponse( res, "Zone Id is required !" )
        }
        
        const ZoneUpdated = await updateZoneById( ZoneId, { isActive } );
        if( !ZoneUpdated ) {
            return errorResponse( res, "Failed to update Zone status !" )
        }
    
        return successResponse( res, "Zone Status Updated Successfully !" )
    }
    catch( err ) {
        return errorResponse( res, err.message )
    }
}

const getZoneDetailsById = async( req, res ) => {
    try {
        const ZoneId = req.params.id;
        if( !ZoneId ) {
            return errorResponse( res, "Zone Id is required !" );
        }

        const ZoneDetails = await getZoneById( ZoneId );
        if( !ZoneDetails ) {
            return errorResponse( res, "Failed to get Zone details !" );
        }
    
        return successResponse( res, "Fetched Successfully !", { ...ZoneDetails.toObject() } )
    }
    catch( err ) {
        return errorResponse( res, err.message )
    }
}

module.exports = {
    addNewZone,
    updateZone,
    updateZoneStatus,
    getZoneDetailsById
}