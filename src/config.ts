import dotenv from 'dotenv'
dotenv.config()


interface MongoDB {
    host: string;
    database: string;
    port: number | string;
    user: string;
    password: string;
}

const MongoDB: MongoDB = {
        host: process.env.DB_HOST ?? 'localhost',
        port: process.env.DB_PORT ?? 27017,
        database: process.env.DB_DATABASE ?? 'mydb',
        user: process.env.DB_USER ?? 'root',
        password: process.env.DB_PASS ?? '',
}
export default MongoDB