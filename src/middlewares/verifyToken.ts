/* eslint-disable no-undef */
import { sign, verify } from 'jsonwebtoken'
import dotenv from 'dotenv'
import { NextFunction } from 'express'
import { User } from '../modules/auth/interfaces/User.interface'
import { ResponseT, ResquestT } from '../interfaces/main'
dotenv.config()



const verifyToken = (req: ResquestT, res: ResponseT, next: NextFunction): void | string => {
    try {
        const authorization = req.headers.authorization
        
        if(!authorization) {
            const payloadAnonimo: User = {
                email: 'anonimo@anonimo.com',
                username: 'anonimo',
                rol: 'readertxt',
                permissions: null,
                modules: null,
                profile:{}
            }

            /** Generamos un token de solo lectura de texto anonimo */
            const token = sign( payloadAnonimo, process.env.JWT_SECRET_KEY ?? '', {expiresIn: process.env.JWT_EXPIRE_KEY} )
            payloadAnonimo.token = token
            
            req.user = payloadAnonimo
        }else{

            const token = authorization.split(' ')[1]
            const payload = verify(token, process.env.JWT_SECRET_KEY ?? '')
            req.user = payload
        }
                
        next()
    } catch ( error ) {
        res.status(401).json({ message: 'file:verifyToken... Error: ' + error.message, status: 401 })
    }

}

export default verifyToken

