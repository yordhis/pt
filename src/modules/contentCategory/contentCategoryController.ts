import HTTP_CODE from "../../constants/code.const"
import { Controller } from "../../interfaces/main"
import ContentCategoryService from "./contentCategoryService"
import { ContentCategoryInterface } from "./interfaces/ContentCategory.interface"
import { contentCategoryType } from "./types/contentCategory.type"
const contentCategoryService = new ContentCategoryService()

export const all: Controller = async (req, res) => {
  let message: string = "ok",
    status: number = HTTP_CODE.OK,
    data: ContentCategoryInterface[] = []
  try {
    data = await contentCategoryService.all()
  } catch (error: any) {
    message = error.message
    status: HTTP_CODE.INTERNAL_SERVER_ERROR
  } finally {
    return res.status(status).json({ message, status, data })
  }
}

export const filterById: Controller = async (req, res) => {
  let message: string = "ok",
    status: number = HTTP_CODE.OK,
    data: contentCategoryType = null

  try {
    data = await contentCategoryService.filterById(req.params.id)
  } catch (error: any) {
    message = error.message
    status: HTTP_CODE.INTERNAL_SERVER_ERROR
  } finally {
    return res.status(status).json({ message, status, data })
  }
}

export const register: Controller = async (req, res) => {
  let message: string = "Categoria de contenido registrado",
    status: number = HTTP_CODE.CREATE,
    data: contentCategoryType = null

  try {
    data = await contentCategoryService.register(req.body)
  } catch (error: any) {
    message = error.message
    status: HTTP_CODE.INTERNAL_SERVER_ERROR
  } finally {
    return res.status(status).json({ message, status, data })
  }
}

export const update: Controller = async (req, res) => {
  let message: string = "Categoria de contenido actualizada.",
    status: number = HTTP_CODE.OK,
    data: contentCategoryType = null

  try {
    data = await contentCategoryService.update(req.params.id, req.body)
  } catch (error: any) {
    message = error.message
    status: HTTP_CODE.INTERNAL_SERVER_ERROR
  } finally {
    return res.status(status).json({ message, status, data })
  }
}

export const destroy: Controller = async (req, res) => {
  let message: string = "Categoria de contenido eliminada",
    status: number = HTTP_CODE.OK,
    result: boolean = false

  try {
    result = await contentCategoryService.delete(req.params.id)
    if(!result){
        message = "No sé eliminó la categoria"
        status = HTTP_CODE.BAD_REQUEST
    }
  } catch (error: any) {
    message = error.message
    status: HTTP_CODE.INTERNAL_SERVER_ERROR
  } finally {
    return res.status(status).json({ message, status, result })
  }
}
