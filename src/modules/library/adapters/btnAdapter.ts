import { User } from "../../auth/interfaces/User.interface"
import LibraryInterface from "../interfaces/Library.interface"
import { BtnAction } from "../types/btn.type"

/* eslint-disable no-undef */
require('dotenv').config()

const btnAdapter = ( data: LibraryInterface, user: User) => {
    try {
        const baseUrl = process.env.APP_URL_API
        let buttons: BtnAction = {}
        
        if( user.permissions ){
            for ( const permission of user.permissions ) {
                if( permission != 'POST' ){
                    buttons[ permission.toLowerCase() ] = {
                        action: baseUrl + '/libraries/' + data._id,
                        method: permission
                    }
                }
            }
        }else{
            buttons = null
        }
    
        return buttons
        
    } catch (error: any) {
        console.log(error.message)
        
    }
}

module.exports = btnAdapter