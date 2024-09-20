import HTTP_CODE from "../../constants/code.const"
import { Controller } from "../../interfaces/main"
import { User } from "./interfaces/User.interface"

const AuthService = require('./authService')
const authService = new AuthService()
const ProfileService = require('../profile/profileService')
const profileService = new ProfileService()

export const register: Controller = async (req, res) => {
    let message:string = 'User register', status:number = HTTP_CODE.CREATE, data

    try{
        const data = req.body
        await authService.register(data)
    } catch ( error: any) {
        message: error.message 
        status = HTTP_CODE.INTERNAL_SERVER_ERROR
    } finally {
        return res.status(status).json({ message, status})
    }
}

export const login: Controller = async (req, res) => {
    let message:string = 'User is login', status:number = HTTP_CODE.OK, data

    try {
        const payload = req.user
        const token = await authService.genrateToken( payload )
    } catch (error: any) {
        message: error.message 
        status = HTTP_CODE.INTERNAL_SERVER_ERROR
    } finally {
        return res.status(status).json({ message, status })
    }
}

export const destroyUser: Controller = async ( req, res ) =>{
    let message:string = 'Deleted account', status:number = HTTP_CODE.OK, data

    try {
        let { id } = req.params
        let userId

        if( id == 'admin' || id == 'reader' || id == 'creator'){
            userId = await authService.filterByUsername(id)
        }
        
        id = userId ? userId.id : id

        authService.destroyUser(id)

        const result = await profileService.filterById(id)
        if( result ){
            profileService.delete(id)
        }

    } catch (error: any) {
        message: error.message 
        status = HTTP_CODE.INTERNAL_SERVER_ERROR
    } finally {
        return res.status(status).json({ message, status })
    }

}

