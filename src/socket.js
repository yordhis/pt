
module.exports = io => {
    io.on('connection', async ( socket ) => {

        console.log('han realizado una petición a la api')

        socket.on('disconnect', () => {
            console.log('Fin de la petición')
        })
    })
}