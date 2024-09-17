import { ResponseT, ResquestT } from "../../interfaces/main"

const RolService = require('../rol/rolService') 
const rolService = new RolService()

const init = ( req: ResquestT, res: ResponseT ): string => {
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
        
    } catch ( error: unknown ) {
        res.status(500).json({ message: error.message ?? '', status:500 })

    } finally{
        res.status(201).json( { message:'Configuration initial seteada.', status:201 })
    }
}

export default init