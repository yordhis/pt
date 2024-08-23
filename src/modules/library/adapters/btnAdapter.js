/* eslint-disable no-undef */
require('dotenv').config()

const btnAdapter = ( user, data) => {
    try {
        const baseUrl = process.env.APP_URL_API
        let buttons = {}
        
        if(user.permissions){
            for (const permission of user.permissions) {
                if(permission != 'POST'){
                    buttons[permission.toLowerCase()] = {
                        action: baseUrl + '/libraries/' + data._id,
                        method: permission
                    }
                }
            }
        }else{
            buttons = null
        }
    
        return buttons
        
    } catch (error) {
        console.log(error.message)
        
    }
}

module.exports = btnAdapter