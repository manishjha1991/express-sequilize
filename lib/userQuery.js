const  moment = require("moment");
module.exports.UserQuery = function ( req ) {
    return {
        profile_pic: req.body.profilePicture ? req.body.profilePicture : null ,
        profile_name: req.body.fullName ,
        user_id: req.body.userId ,
        shop_name: req.body.shopName ,
        pin_code: req.body.pinCode ? req.body.pinCode : null ,
        hobbies: req.body.hobbies ? JSON.stringify ( req.body.hobbies ) : null ,
        dob: req.body.dob ? moment ( req.body.dob ).format ( "DD-MMM-YYYY" ) : null ,
        city: req.body.city ? req.body.city : null ,
        gender: req.body.gender ? parseInt ( req.body.gender ) : null ,
        marital_status: req.body.maritalStatus
            ? parseInt ( req.body.maritalStatus )
            : null ,
        anniversary_date: req.body.anniversary
            ? moment ( req.anniversary ).format ( "DD-MMM-YYYY" )
            : null ,
        updated_by: req.body.updatedBy ? req.body.updatedBy : null,
    };
};

