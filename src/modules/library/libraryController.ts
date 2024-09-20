import HTTP_CODE from '../../constants/code.const'
import { Controller } from '../../interfaces/main'
import LibraryInterface from './interfaces/Library.interface'
import { LibraryType } from './types/Library.type'
import LibraryService from './libraryService'
const libraryService = new LibraryService()

export const register: Controller = async ( req, res ) => {
    let message: string = 'Multimedia creado', status = HTTP_CODE.CREATE, data: LibraryType = []
    try {
        const user = req.user

        /** Validate data */


        const library:LibraryType = {
            title: req.body.title,
            description: req.body.description,
            theme: req.body.theme,
            links: req.body.links,
            author: req.body.author,
            credit: req.body.credit
        }
       
        data = await libraryService.register( library ) 
    } catch (error: any) {
        message = 'Controlador de registro, Error:' + error.message
        status =  HTTP_CODE.INTERNAL_SERVER_ERROR
    } finally {
        return res.status(status).json({ message, status, data })
    }
}

export const all: Controller = async ( req, res ) => {
    let message: string = 'Ok', status = HTTP_CODE.CREATE, data: LibraryInterface

    try {
        const user = req.user
        const libraryService = new LibraryService( user )
        const data = await libraryService.all()
        res.status(200).json({ message: 'Ok', status: 200, data })
    } catch ( error: any ) {
        message = 'Controlador de all, Error:' + error.message
        status =  HTTP_CODE.INTERNAL_SERVER_ERROR
    } finally {
        return res.status(status).json({ message, status })
    }
}

exports.filterById = async ( req, res ) => {
    try {
        const user = req.user
        const libraryService = new LibraryService( user )
        const data = await libraryService.filterById( req.params.id )
        res.status(200).json({ message: 'Ok', status: 200, data })
    } catch (error) {
        res.status(500).json({ message: error.message, status: 500 })
    }
}

exports.filterByIdTheme = async ( req, res ) => {
    try {
        const user = req.user
        const libraryService = new LibraryService( user )
        const data = await libraryService.filterByIdTheme( req.params.id )
        res.status(200).json({ message: 'Ok', status: 200, data })
    } catch (error) {
        res.status(500).json({ message: error.message, status: 500 })
    }
}

exports.update = async ( req, res ) => {
    try {
        const user = req.user
        const libraryService = new LibraryService( user )
        const data = await libraryService.update( req.params.id, req.body )
        res.status(200).json({ message: 'Ok', status: 200, data })
    } catch (error) {
        res.status(500).json({ message: error.message, status: 500 })
    }
}

exports.destroy = async ( req, res ) => {
    try {
        const user = req.user
        const libraryService = new LibraryService( user )
        const data = await libraryService.destroy( req.params.id )
        res.status(200).json({ message: 'Ok', status: 200, data })
    } catch (error) {
        res.status(500).json({ message: error.message, status: 500 })
    }
}

