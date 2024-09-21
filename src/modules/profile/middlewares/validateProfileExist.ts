import HTTP_CODE from "../../../constants/code.const"
import { Midd } from "../../../interfaces/main"
import ProfileService from "../profileService"
const profileService = new ProfileService()

const validateProfileExist: Midd = async (req, res, next) => {
  try {
    const user = req.user
    if(user){
        if(user.id){
            const profileExist = await profileService.filterById(user.id)
            if (profileExist) {
                return res.status(HTTP_CODE.BAD_REQUEST).json({ 
                    message: "Ya tienes un perfil registrado.", 
                    status: HTTP_CODE.BAD_REQUEST 
                })
            }
        }
    }
  } catch (error: any) {
    res.status(HTTP_CODE.INTERNAL_SERVER_ERROR).json({ 
        message: `Falló al validar si el perfil existe. Error: ${error.message}.`, 
        status: HTTP_CODE.INTERNAL_SERVER_ERROR 
    })
  } finally {
    next()
  }
}

export default validateProfileExist
