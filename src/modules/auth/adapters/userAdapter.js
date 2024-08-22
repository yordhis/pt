const RolService = require('../../rol/rolService')
const ProfileService = require('../../profile/profileService')
const profileService = new ProfileService()
const rolService = new RolService()

const userAdapter = async ( data ) => {
    if( data ){
        const { permissions, modules } = await rolService.filterByName( data.rol )
        const profile = await profileService.filterById( data._id )
    
        return {
            id: data._id,
            username: data.username,
            email: data.email,
            password: data.password,
            rol: data.rol,
            permissions,
            modules,
            profile
        }     
    }else{
        return null
    }
}

module.exports = userAdapter