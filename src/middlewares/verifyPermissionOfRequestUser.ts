import HTTP_CODE from "../constants/code.const"
import { Midd, RequestT } from "../interfaces/main"
import RolService from "../modules/rol/rolService"
const rolService = new RolService()

const veirifyPermissionOfRequestUser: Midd = async (req, res, next) => {
  try {
    const user = req.user
    const pathname: string = req.baseUrl.split("/")[2]
    const method: string = req.method

    
  
      if (typeof user != "undefined") {
        const userRol = await rolService.filterByName(user.rol)
        if (userRol) {
          if(pathname){
            if (!userRol.modules.includes(pathname))
              return res.status(HTTP_CODE.UNAUTHORIZE).json({
                message: "Acceso denegado a este módulo.",
                status: HTTP_CODE.UNAUTHORIZE,
              })
          }

          /**
           * Si el nombre de la ruta es @var profiles
           * continua ya que es una accion de la cuenta del usuario logeado
           */
          if (pathname == "profiles") return next()

          if (!userRol.permissions.includes(method)){
            return res.status(HTTP_CODE.UNAUTHORIZE).json({
              message: "Acción denegada, no tiene permisos para ejecutar esta solicitud.",
              status: HTTP_CODE.UNAUTHORIZE,
            })
          }
        } else {
          return res.status(HTTP_CODE.UNAUTHORIZE).json({
            message: "Acceso denegado, el rol que poseé no existe.",
            status: HTTP_CODE.UNAUTHORIZE,
          })
        }
      } else {
        return res.status(HTTP_CODE.UNAUTHORIZE).json({
          message: "Usuario no definido.",
          status: HTTP_CODE.UNAUTHORIZE,
        })
      }
    
    next()
  } catch (error: any) {
   return res.status(HTTP_CODE.INTERNAL_SERVER_ERROR).json({
      message: "file:verifyPermission... error: " + error.message,
      status: HTTP_CODE.INTERNAL_SERVER_ERROR,
    })
  } 
}

export default veirifyPermissionOfRequestUser
