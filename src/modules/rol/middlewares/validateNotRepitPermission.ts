import HTTP_CODE from "../../../constants/code.const"
import { Midd } from "../../../interfaces/main"

const validateNotRepitPermission: Midd = async (req, res, next) => {
    try {
        const { permissions } = req.body

        let capture = []
    
        /** Se catura los permisos repetidos en el arreglo de permissions */
        for (let i = 0; i < permissions.length; i++) {
            const permission:string = permissions[i]
            let arrayFilter = permissions.filter( ( perm: string ) => perm === permission)
            if (arrayFilter.length > 1) capture.push( arrayFilter )
        }

        /** Validamos si huvo una captura de permisos repetidos */
        if(capture.length) return res.status(HTTP_CODE.BAD_REQUEST).json({
            message: 'Esta enviando permisos repetidos.', 
            status: HTTP_CODE.BAD_REQUEST 
        })

    } catch (error: any) {
        return res.status(HTTP_CODE.INTERNAL_SERVER_ERROR).json({ 
            message: error.messsage, 
            status: HTTP_CODE.INTERNAL_SERVER_ERROR 
        })
    } finally {
        next()
    }
}

export default validateNotRepitPermission