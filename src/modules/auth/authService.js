
const UserAuth = require('./authModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class AuthService{
    constructor(){}

    async register(data){
        /** 
         * Primero se encripta la contraseña
         * con el @pack bcrypt @method hashSync (clave, saltos_paraencriptar)
         */
        data.password = bcrypt.hashSync(data.password, 10)
   
        const userAuth = new UserAuth(data)
        return await userAuth.save()
    }

    async filterByEmail(email){
        const data = await UserAuth.findOne({ email })
        return data
    }

    async genrateToken(payload){
        // eslint-disable-next-line no-undef
        const token =  await jwt.sign(payload, app.get('secret'))
        return token
    }
}

module.exports = AuthService