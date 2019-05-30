module.exports = ( sequelize , type ) => {
    const {STRING , INTEGER , JSONB , DATE } = type;
    return sequelize.define ( 'user_info' , {
        id: {
            type: INTEGER ,
            primaryKey: true ,
            autoIncrement: true
        } ,
        user_id: {
            type: STRING ,
            allowNull: false ,
            validate: {
                notNull: {msg: "USER_ID is required"}
            }
        } ,
        profile_name: {
            type: STRING ,
            allowNull: false ,
            validate: {
                notNull: {msg: "PROFILE_NAME is required"}
            }
        } ,
        shop_name: {
            type: STRING ,
            allowNull: false ,
            validate: {
                notNull: {msg: "SHOP_NAME is required"}
            }
        } ,
        dob: {
            type: STRING ,
            allowNull: false ,
            validate: {
                notNull: {msg: "DOB is required"}
            }
        } ,
        gender: {
            type: STRING ,
            allowNull: false ,
            validate: {
                notNull: {msg: "GENDER is required"}
            }
        } ,

        marital_status: {
            type: STRING ,
            allowNull: false ,
            validate: {
                notNull: {msg: "MARITAL_STATUS is required"}
            }
        } ,
        hobbies: {
            type: JSONB
        } ,
        pin_code: {
            type: INTEGER
        } ,
        profile_pic: {
            type: STRING
        } ,
        city: {
            type: STRING
        } ,

        anniversary_date: {
            type: DATE
        } ,
        spouse_name: {
            type: STRING
        } ,

        has_children: {
            type: INTEGER
        } ,
        number_of_children: {
            type: INTEGER
        } ,
        updated_by: {
            type: STRING ,
            allowNull: false ,
            validate: {
                notNull: {msg: "UPDATED_BY is required"}
            }
        } ,
        createdAt: {
            type: "TIMESTAMP" ,
            defaultValue: sequelize.literal ( 'CURRENT_TIMESTAMP' )
        } ,
        updatedAt: {
            type: "TIMESTAMP" ,
            defaultValue: sequelize.literal ( 'CURRENT_TIMESTAMP') ,
        }

    } )
};
