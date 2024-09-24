import HTTP_CODE from "../../../constants/code.const"
import { Midd } from "../../../interfaces/main"

import ThemeService from "../../theme/themeService"
const themeService = new ThemeService()

const validateThemeIsActive: Midd = async (req, res, next) => {
  try {
    const { theme } = req.body

    const themeIsActive = await themeService.filterByName(theme)
    if (themeIsActive) {
      if (!themeIsActive.status){
          return res.status(400).json({
            message: "La temática no está activa, intente con otra.",
            status: 400,
          })
      }
    }else{
        return res.status(HTTP_CODE.NOT_FOUND).json({
            message: "No se encontro el tema seleccionado",
            status: HTTP_CODE.NOT_FOUND
        })
    }

    next()
  } catch (error: any) {
    res.status(HTTP_CODE.INTERNAL_SERVER_ERROR).json({
      message: "Midd Theme is active. Error: " + error.message,
      status: HTTP_CODE.INTERNAL_SERVER_ERROR,
    })
  }
}

export default validateThemeIsActive
