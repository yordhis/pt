import HTTP_CODE from '../../constants/code.const'
import { Controller } from '../../interfaces/main'
import { LibraryType, LibrariesAdapterType, LibraryAdapterType } from './types/Library.type'
import LibraryService from './libraryService'
import libraryAdapter from './adapters/libraryAllAdapter'
import librarySingleAdapter from './adapters/librarySingleAdapter'
const libraryService = new LibraryService()

export const register: Controller = async ( req, res ) => {
    let message: string = 'Resource created', status = HTTP_CODE.CREATE, data: LibraryType = null
    try {

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
    let message: string = 'Ok', 
    status = HTTP_CODE.CREATE, 
    data: LibrariesAdapterType = null

    try {
        const user = req.user
        const result = await libraryService.all()
        if(result && user) data = await libraryAdapter( result, user )
        
    } catch (error: any) {
        message = error.message
        status =  HTTP_CODE.INTERNAL_SERVER_ERROR
    } finally {
        return res.status(status).json({ message, status, data })
    }
}

export const filterById: Controller = async ( req, res ) => {
    let message: string = 'Ok', 
    status = HTTP_CODE.OK, 
    data: LibraryAdapterType = null
    try {
        const user = req.user
        const result = await libraryService.filterById( req.params.id )
        if( result && user ) data = await librarySingleAdapter(result, user)
    } catch (error: any) {
        message = error.message
        status =  HTTP_CODE.INTERNAL_SERVER_ERROR
    } finally {
        return res.status(status).json({ message, status, data })
    }
}

export const filterByIdTheme: Controller = async ( req, res ) => {
    let message: string = 'Ok', 
    status = HTTP_CODE.OK, 
    data: LibrariesAdapterType = null
    try {
        const user = req.user
        const result = await libraryService.filterByIdTheme( req.params.id )
        if(result && user) data = await libraryAdapter(result, user) 
    } catch (error: any) {
        message = error.message
        status =  HTTP_CODE.INTERNAL_SERVER_ERROR
    } finally {
        return res.status(status).json({ message, status, data })
    }
}

export const update: Controller = async ( req, res ) => {
    let message: string = 'Ok', 
    status = HTTP_CODE.OK, 
    data: LibraryType = null
    try {
        const result = await libraryService.update( req.params.id, req.body )
        if(result) data = result 
        else message = "Not updated"; status = HTTP_CODE.BAD_REQUEST
    } catch (error: any) {
        message = error.message
        status =  HTTP_CODE.INTERNAL_SERVER_ERROR
    } finally {
        return res.status(status).json({ message, status, data })
    }
}

export const destroy: Controller = async ( req, res ) => {
    let message: string = 'Ok', 
    status = HTTP_CODE.OK, 
    data: boolean = false
    try {
        data = await libraryService.destroy( req.params.id )
        if(!data) message = "Not deleted"; status = HTTP_CODE.BAD_REQUEST
    } catch (error: any) {
        message = error.message
        status =  HTTP_CODE.INTERNAL_SERVER_ERROR
    } finally {
        return res.status(status).json({ message, status, data })
    }
}

