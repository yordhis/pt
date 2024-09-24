import HTTP_CODE from '../../constants/code.const'
import { Controller } from '../../interfaces/main'
import ThemeService from './themeService'
import { ThemesType, ThemeType } from './types/theme.type'
const themeService = new ThemeService()

export const all: Controller = async ( req, res ) => {
    let message: string =  "ok", 
    status:number = HTTP_CODE.OK,
    data: ThemesType = null
    try {
        data =  await themeService.all()
    } catch (error: any) {
        message = error.message 
        status: HTTP_CODE.INTERNAL_SERVER_ERROR
    } finally{
        return res.status(status).json({ message, status, data })
    }
}

export const filterById: Controller = async ( req, res ) => {
    let message: string =  "ok", 
    status:number = HTTP_CODE.OK,
    data: ThemeType = null
    try {
        data =  await themeService.filterById( req.params.id )
    } catch (error: any) {
        message = error.message 
        status: HTTP_CODE.INTERNAL_SERVER_ERROR
    } finally{
        return res.status(status).json({ message, status, data })
    }
}

export const register: Controller = async ( req, res ) => {
    let message: string =  "Temática registrada.", 
    status:number = HTTP_CODE.CREATE,
    data: ThemeType = null
    try {
        data = await themeService.register(req.body)
    } catch (error: any) {
        message = error.message 
        status: HTTP_CODE.INTERNAL_SERVER_ERROR
    } finally{
        return res.status(status).json({ message, status, data })
    }
}


export const update: Controller = async ( req, res ) => {
    let message: string =  "Temática actualizada.", 
    status:number = HTTP_CODE.CREATE,
    data: ThemeType = null
    try {
        data = await themeService.update( req.params.id, req.body )
    } catch (error: any) {
        message = error.message 
        status: HTTP_CODE.INTERNAL_SERVER_ERROR
    } finally{
        return res.status(status).json({ message, status, data })
    }
}

export const destroy: Controller = async ( req, res ) => {
    let message: string =  "Temática eliminada.", 
    status:number = HTTP_CODE.CREATE,
    result: boolean = false
    try {
        result = await themeService.destroy(req.params.id)
        if(!result) {
            message = "No se eliminó la temática"
            status: HTTP_CODE.BAD_REQUEST
        }
    } catch (error: any) {
        message = error.message 
        status: HTTP_CODE.INTERNAL_SERVER_ERROR
    } finally{
        return res.status(status).json({ message, status })
    }
}