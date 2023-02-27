const { verifyJWT } = require('./authHelper');

const { getAdminUserDetailsById } = require('./../../src/v1/admin-user/admin-user.dao');

const verifyAdminAuth = async ( req, res, next ) => {
    let authToken = getHeaders( req );
    let adminObj = await verifyJWT( authToken );
    if( adminObj ) {
        let latestAdminObj = await getAdminUserDetailsById( adminObj._id );
        req.adminObj = latestAdminObj;
        next();
    }
    else {
        res.status(500).json( { success: false, message: "Session Expired !" } )
    }
}


const getHeaders = ( req ) => {
    let headers = req.headers;
    return headers.authorization ? headers.authorization.split( " " )[1] : false;
}

module.exports = {
    
    verifyAdminAuth,
}