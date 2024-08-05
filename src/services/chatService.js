const Chat = require('../models/chatModel')

class ChatService{
    constructor(){}

    async getMessages(){
        const messages = await Chat.find({})
        return messages
    }

    async setMessage(message){
        const newMessage = new Chat(message)
        return await newMessage.save()
    }

}
module.exports = ChatService

