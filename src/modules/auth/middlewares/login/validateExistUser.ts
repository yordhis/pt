import HTTP_CODE from "../../../../constants/code.const"
import { Midd } from "../../../../interfaces/main"
import AuthService from "../../authService"
import { UserType } from "../../types/User.type"
const authService = new AuthService()

/**
 * Midd @method validateExistUser
 * Este midd se encarga de validar que exista el email y el username para aprobar el login
 * y se asigna los datos del usuario a la variable global @var req.user
 */
const validateExistUser: Midd = async (req, res, next) => {
  try {
    const { username, email } = req.body
    let user: UserType = null
    if (username) user = await authService.filterByUsername(username)
    if (!user) {
      if (email) user = await authService.filterByEmail(email)
      if (!user)
        return res.status(HTTP_CODE.UNAUTHORIZE).json({
          message: "Username or email not exist",
          status: HTTP_CODE.UNAUTHORIZE,
        })
    }
    req.credentials = user
  } catch (error: any) {
    res.status(HTTP_CODE.INTERNAL_SERVER_ERROR).json({
      message: error.message,
      status: HTTP_CODE.INTERNAL_SERVER_ERROR,
    })
  } finally {
    next()
  }
}

export default validateExistUser
