import { ResponseT, ResquestT } from '../../interfaces/main'
import RolInterface from './interfaces/Rol.interface'
import RolService from './rolService'
const rolService = new RolService()

export const register = async ( req: ResquestT, res: ResponseT ): ResponseT => {
    let message:string = 'Rol agregado', status:number = 201 
    let data
    try {
        data =  await rolService.register(req.body)
    } catch (error: any) {
        message = error.message
        status = 500 
    } finally {
        return res.status(status).json({ message, status, data })
    }
}

exports.all = async ( req, res ) => {
    try {
        const data = await rolService.all()
        res.status(200).json({ message: 'Ok', status: 200, data  })
    } catch (error) {
        res.status(500).json({ message: error.message, status: 500 })
    }
}

exports.filterById = async ( req, res ) => {
    try {
        const data = await rolService.filterById( req.params.id )
        res.status(200).json({ message: 'Ok', status: 200, data  })
    } catch (error) {
        res.status(500).json({ message: error.message, status: 500 })
    }
}

exports.update = async ( req, res ) => {
    try {
        const data = await rolService.update( req.params.id, req.body )
        res.status(200).json({ message: 'Ok', status: 200, data  })
    } catch (error) {
        res.status(500).json({ message: error.message, status: 500 })
    }
}

exports.destroy = async ( req, res ) => {
    try {
        const data = await rolService.destroy( req.params.id )
        res.status(200).json({ message: 'Ok', status: 200, data  })
    } catch (error) {
        res.status(500).json({ message: error.message, status: 500 })
    }
}