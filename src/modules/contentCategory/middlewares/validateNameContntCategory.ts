import HTTP_CODE from "../../../constants/code.const"
import { Midd } from "../../../interfaces/main"
import ContentCategoryService from "../contentCategoryService"
const contentCategoryService = new ContentCategoryService()

const validateNameContentCategory: Midd = async (req, res, next) => {
  try {
    let result = await contentCategoryService.filterByName(req.body.name)
    if (result) {
      return res.status(HTTP_CODE.UNAUTHORIZE).json({
        message: "El nombre de la categorias de contenido ya existe",
        status: HTTP_CODE.UNAUTHORIZE,
      })
    }
  } catch (error: any) {
    return res.status(HTTP_CODE.INTERNAL_SERVER_ERROR).json({
      message: error.message,
      status: HTTP_CODE.INTERNAL_SERVER_ERROR,
    })
  } finally {
    next()
  }
}

export default validateNameContentCategory
