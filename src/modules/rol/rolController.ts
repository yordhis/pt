import HTTP_CODE from '../../constants/code.const'
import { ResponseT, RequestT } from '../../interfaces/main'
import RolInterface from './interfaces/Rol.interface'
import RolService from './rolService'
const rolService = new RolService()

export const register = async ( req: RequestT, res: ResponseT ): Promise<ResponseT> => {
    let message:string = 'Rol agregado', status:number = HTTP_CODE.CREATE, data
    try {
        data =  await rolService.register(req.body)
    } catch (error: any) {
        message = error.message
        status = HTTP_CODE.INTERNAL_SERVER_ERROR 
    } finally {
        return res.status(status).json({ message, status, data })
    }
}

export const all = async ( req: RequestT, res: ResponseT  ): Promise<ResponseT> => {
    let message:string = 'Rol agregado', status:number = HTTP_CODE.OK, data
    try {
        data = await rolService.all()
    } catch (error: any) {
         message = error.message 
         status = HTTP_CODE.INTERNAL_SERVER_ERROR
    } finally { 
        return res.status(status).json({ message, status, data })
    }
}

export const filterById = async (req: RequestT, res: ResponseT  ): Promise<ResponseT> => {
    let message:string = 'Ok', status:number = HTTP_CODE.OK, data
    try {
        const data = await rolService.filterById( req.params.id )
    } catch (error: any) {
        message = error.message
        status = HTTP_CODE.INTERNAL_SERVER_ERROR
    } finally {
        return res.status(status).json({ message, status, data })
    }
}

export const update = async (req: RequestT, res: ResponseT  ): Promise<ResponseT> => {
    let message:string = 'Ok', status:number = HTTP_CODE.OK, data
    try {
        data = await rolService.update( req.params.id, req.body )
    } catch (error: any) {
        message = error.message
        status = HTTP_CODE.INTERNAL_SERVER_ERROR
    } finally {
        return res.status(status).json({ message, status, data })
    }
}

export const destroy = async (req: RequestT, res: ResponseT  ): Promise<ResponseT> => {
    let message:string = 'Ok', status:number = HTTP_CODE.OK, data
    try {
        data = await rolService.destroy( req.params.id )
    } catch (error: any) {
        message = error.message
        status = HTTP_CODE.INTERNAL_SERVER_ERROR
    } finally {
        return res.status(status).json({ message, status, data })
    }
}