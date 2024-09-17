import { ResponseT, ResquestT } from "../../interfaces/main"

const RolService = require('../rol/rolService') 
const rolService = new RolService()

const init = ( req: ResquestT, res: ResponseT ): ResponseT  => {
    let message:string = 'OK', status:number = 200

    try {
        const rols = [
            {
                name:'admin', 
                permissions: ['GET', 'POST', 'PUT', 'DELETE'],
                modules: ['libraries', 'rols', 'themes', 'categories', 'profiles']
            },
            {
                name:'creator', 
                permissions: ['GET', 'POST', 'PUT'],
                modules: ['libraries']
            },
            {
                name:'reader', 
                permissions: ['GET'],
                modules: ['libraries']
            },
        ]
        
        rols.forEach(rol => {
            rolService.register(rol)
        })
      
        message = 'Configuration initial seteada.', 
        status = 201
        
    } catch ( error: any ) {
        message += error ? error.message : ''
        status = 500
    } finally{
       
        return  res.status(status).json( { message, status })
    }
}

export default init