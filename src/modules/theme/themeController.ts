const ThemeService = require('./themeService')
const themeService = new ThemeService()

exports.all = async ( req, res ) => {
    try {
        const data =  await themeService.all()
        res.status(200).json({ message: 'ok', status:200, data })
    } catch (error) {
        res.status(500).json({ message: error.message, status:500 })
    }
}

exports.filterById = async ( req, res ) => {
    try {
        const data =  await themeService.filterById( req.params.id )
        res.status(200).json({ message: 'ok', status:200, data })
    } catch (error) {
        res.status(500).json({ message: error.message, status:500 })
    }
}

exports.register = async ( req, res ) => {
    try {
        const data = await themeService.register(req.body)
        res.status(201).json({ message: 'Temática registrada.', status: 201, data })
    } catch (error) {
        res.status(500).json({ message: error.message, status:500 })
    }
}


exports.update = async ( req, res ) => {
    try {
        const data = await themeService.update( req.params.id, req.body )
        res.status(200).json({ message: 'Temática actualizada.', status: 200, data })
    } catch (error) {
        res.status(500).json({ message: error.message, status:500 })
    }    
}

exports.destroy = async ( req, res ) => {
    try {
        const data = await themeService.destroy(req.params.id)
        res.status(200).json({ message: 'Temática eliminada.', status: 200, data })
    } catch (error) {
        res.status(500).json({ message: error.message, status:500 })
    }
}