const RolService = require('./rolService')
const rolService = new RolService()

exports.register = async ( req, res ) => {
    try {
        const data =  await rolService.register(req.body)
        res.status(201).json({ message: 'Rol agregado.', status: 201, data  })
    } catch (error) {
        res.status(500).json({ message: error.message, status: 500 })
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