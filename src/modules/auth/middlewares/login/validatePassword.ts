import HTTP_CODE from "../../../../constants/code.const"
import { Midd } from "../../../../interfaces/main"

import bcrypt from "bcrypt"

/**
 * Este @middleware se encar de comparar la contraseña ingresada por el usuario
 * y @si la contraseña es valida pasa al controlador generando un token
 * @sino retorna el mensaje de contraseña incorrecta.
 *
 * @param req
 * @param res
 * @param next
 * @returns Promise< void | ResponseT >
 */
const validatePassword: Midd = async (req, res, next) => {
  try {
    if (req.credentials) {
      const passwordMatch = bcrypt.compareSync(req.body.password, req.credentials.password)
      if (!passwordMatch)
        return res.status(HTTP_CODE.UNAUTHORIZE).json({
          message: "Incorrect password",
          status: HTTP_CODE.UNAUTHORIZE,
        })
    } else {
      return res.status(HTTP_CODE.UNAUTHORIZE).json({
        message: "Please, send you credentials!",
        status: HTTP_CODE.UNAUTHORIZE,
      })
    }
  } catch (error: any) {
    res.status(HTTP_CODE.INTERNAL_SERVER_ERROR).json({
      message: error.message,
      status: HTTP_CODE.INTERNAL_SERVER_ERROR,
    })
  } finally {
    next()
  }
}

export default validatePassword
