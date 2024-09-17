import { Request, response, Response } from 'express'

export interface ResquestT extends Request {
    user: any
}

export interface ResponseT extends Response {
    success?: ( status: number, message?: string ) => string
    error?: ( status: number, message: string ) => string
}

