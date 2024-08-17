
const UserAuth = require('./authModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

class AuthService{
    constructor(){}

    async register(data){
        data.password = bcrypt.hashSync(data.password, 10)
        const userAuth = new UserAuth(data)
        return await userAuth.save()
    }

    async filterByUsername(username){
        const data = await UserAuth.findOne({ username })
        return data
    }

    async filterByEmail(email){
        const data = await UserAuth.findOne({ email })
        return data
    }

    async genrateToken(payload){
        // eslint-disable-next-line no-undef
        const token =  await jwt.sign(payload, process.env.APP_SECRET_KEY, { expiresIn: '1h' })
        return token
    }

}

module.exports = AuthService