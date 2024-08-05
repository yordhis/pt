const ChatService = require('./services/chatService') 
const chatService = new ChatService() 



module.exports = io => {
    io.on('connection', async ( socket ) => {

        let messages = await chatService.getMessages()
        // console.log("Se ha conectado un nuevo cliente al servidor");
        io.emit('show-message', messages)
        /** 
         * Escuchamos el evento emitido por el cliente 
         * @Nota Si el cliente emite un evento se escucha con el mismo cliente
         * es decir, @var socket
         * 
        */
        socket.on('add-message', async message => {
            await chatService.setMessage(message)
            messages = await chatService.getMessages()
            io.emit('show-message', messages)
        })

        /** 
         * @method Broadcast
         * Son mensajes que se envian a todos los clientes conectados al servidor.
         * en este caso cada vez que se concte un nuevo cliente se ejecutara e informara 
         * a los demas clientes que se conecto un nueco cliente
         */
        socket.broadcast.emit('new-connection', "Nuevo cliente conectado")
        
        /** Escuchar evento y Mostrar que usuario esta ecribiendo a los demas usuarios */
        socket.on('writing', user => {
            socket.broadcast.emit('writing', user )
        })


        socket.on('disconnect', () => {
            console.log("El cliente se desconecto del servidor");
        })
    })
}