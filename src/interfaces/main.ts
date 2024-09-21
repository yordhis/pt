import { Request, Response, NextFunction } from 'express'
import { UserAdapter, UserInterface } from '../modules/auth/interfaces/User.interface'


/** Tipo e interfaces de express personalizados */
export interface RequestT extends Request {
    user?: UserAdapter | undefined
    credentials?: UserInterface | undefined
}
export interface ResponseT extends Response {
    success?: ( status: number, message?: string ) => string
    error?: ( status: number, message: string ) => string
}
export type Next = NextFunction
/** Cierre Tipo e interfaces de express personalizados */

/** Tipo para los controlles */
export type Controller = (req: RequestT, res: ResponseT) => Promise<ResponseT>

/** Tipo para los middleware */
export type Midd = (req: RequestT, res: ResponseT, next: Next) => Promise<void | ResponseT>

/** Interfaz de los código de respuesta http */
export interface HTTP_CODE_I {
    OK:number
    NOT_FOUND:number
    BAD_REQUEST:number
    INTERNAL_SERVER_ERROR:number
    CREATE:number
    UNAUTHORIZE:number
}
