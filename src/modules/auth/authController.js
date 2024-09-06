const AuthService = require('./authService')
const authService = new AuthService()
const ProfileService = require('../profile/profileService')
const profileService = new ProfileService()

exports.register = async (req, res) => {
    try {
        await authService.register(req.body)
        res.status(201).json({ message: 'Usuario registrado', status: 201 })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.login = async (req, res) => {
    try {
        
        const payload = req.user
        const token = await authService.genrateToken( payload )
        res.status(200).json({ token })

    } catch (error) {
        res.status(500).json({ message: error.message, status: 500 })
    }
}

exports.destroyUser = async ( req, res ) =>{
    try {
        let { id } = req.params
        let userId = false

        if( id == 'admin' ){
            userId = await authService.filterByUsername(id)
        }
        
        id = userId ? userId.id : id

        authService.destroyUser(id)

        const result = await profileService.filterById(id)
        if( result ){
            profileService.delete(id)
        }

        res.status(200).json({ message: 'Cuenta eliminada', status:200 })
    } catch (error) {
        res.status(500).json({ message: error.message, status: 500 })
    }

}

