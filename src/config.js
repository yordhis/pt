require('dotenv').config()

const db = {
    mongodb:{
        host: process.env.DB_LOCAL_HOST,
        database: process.env.DB_LOCAL_DATABASE,
        port: process.env.DB_LOCAL_PORT
    },

    mongodbsrv:{
        user: process.env.DB_CLOUD_USER,
        password: process.env.DB_CLOUD_PASS,
        host: process.env.DB_CLOUD_HOST,
        port: process.env.DB_CLOUD_PORT,
        database: process.env.DB_CLOUD_DATABASE,
    }
}
module.exports = db