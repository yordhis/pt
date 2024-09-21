
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

import UserAuth from './authModel'
import { UserAdapter, UserInterface } from './interfaces/User.interface'

class AuthService  {

    async register( data: UserInterface ){
        data.password = bcrypt.hashSync( data.password, 10 )
        const userAuth = new UserAuth(data)
        return await userAuth.save()
    }

    async filterByUsername( username: string ): Promise<UserInterface | null>{
        return await UserAuth.findOne({ username })
    }

    async filterByEmail( email: string ):Promise<UserInterface | null>{
        return await UserAuth.findOne({ email })
     
    }

    async destroyUser( userId: string ){
        return await UserAuth.deleteOne({userId})
    }

    async genrateToken( payload: UserAdapter ){
        const token = await jwt.sign( payload, process.env.APP_SECRET_KEY ?? 'secret-key' , { expiresIn: '1h' })
        return token
    }

}

export default AuthService