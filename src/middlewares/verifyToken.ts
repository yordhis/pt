/* eslint-disable no-undef */
import { JwtPayload, sign, verify } from "jsonwebtoken"
import dotenv from "dotenv"
import { UserAdapter } from "../modules/auth/interfaces/User.interface"
import { Midd } from "../interfaces/main"
import HTTP_CODE from "../constants/code.const"
dotenv.config()

const verifyToken: Midd = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization
    const payload: UserAdapter = {
      id: "anonimo",
      email: "anonimo@anonimo.com",
      username: "anonimo",
      rol: "readertxt",
      permissions: null,
      modules: null,
      profile: {},
    }

    if (!authorization) {
      /** Generamos un token de solo lectura de texto anonimo */
      const token = sign(payload, process.env.JWT_SECRET_KEY ?? "", { expiresIn: process.env.JWT_EXPIRE_KEY })
      payload.token = token

      req.user = payload
    } else {
      const token = authorization.split(" ")[1]
      const tokenVerify = verify(token, process.env.JWT_SECRET_KEY ?? "")
      if(typeof(tokenVerify) != 'string'){
        payload.id = tokenVerify.id
        payload.username = tokenVerify.username
        payload.email = tokenVerify.email
        payload.rol = tokenVerify.rol
        payload.modules = tokenVerify.modules
        payload.permissions = tokenVerify.permissions
        payload.profile = tokenVerify.profile

        req.user = payload
      }else{
        return res.status(HTTP_CODE.UNAUTHORIZE).json({
          message: "Not data user",
          status: HTTP_CODE.UNAUTHORIZE,
        })
      }

    }

    next()
  } catch (error: any) {
    return res.status(HTTP_CODE.INTERNAL_SERVER_ERROR).json({
      message: "file:verifyToken... Error: " + error.message,
      status: HTTP_CODE.INTERNAL_SERVER_ERROR,
    })
  }
}

export default verifyToken
