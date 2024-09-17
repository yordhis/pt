import mongoose from 'mongoose'
import dotenv from 'dotenv'
import MongoDB from '../config'
dotenv.config()

export default class Mongoose {
    async conncet(): Promise<void> {
        await mongoose.connect(MongoDB.host,{
            dbName: MongoDB.database,
            user: MongoDB.user,
            pass: MongoDB.password,
            retryWrites: true,
            w:'majority'
        }).then(res => {
            console.log(`Is Connect with: ${ res.connection.name }`)
        }).catch(error => {
            console.error(`Error connecting to database ${error.message}`)
        })
    }
}





