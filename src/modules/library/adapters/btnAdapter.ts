import { UserAdapter } from "../../auth/interfaces/User.interface"
import { LibraryInterface } from "../interfaces/Library.interface"
import { BtnLibraryType } from "../types/btn.type"

import dotenv from "dotenv"
dotenv.config()

const btnAdapter = ( data: LibraryInterface, user: UserAdapter) => {
    try {
        const baseUrl = process.env.APP_URL_API
        let buttons: BtnLibraryType = {}
        
        if( user.permissions ){
            for ( const permission of user.permissions ) {
                if( permission != 'POST' ){
                        let permiss:string = permission.toLowerCase()
                        buttons[permiss] = {
                            action: baseUrl + '/libraries/' + data._id,
                            method: permiss
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

export default btnAdapter