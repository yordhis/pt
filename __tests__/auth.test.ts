 
const request = require('supertest')

const app = require('../src/app')


describe('Testing the module of Authentication', () => {
    const users = [
        { username: 'reader', email: 'reader@reader.com', password: '12345678', rol: 'reader' },
        { username: 'creator', email: 'creator@creator.com', password: '12345678', rol: 'creator' },
        { username: 'admin', email: 'admin@admin.com', password: '12345678', rol: 'admin' },
    ]

    describe('Router /RegisterAdmin: ', () => {
        describe('Given all the data of user with rol admin', () => {
            test('Should return a response json with a message and status 201', async () => {

                const response = await request(app).post('/api/auth/registerAdmin').send(users[2])

                expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))

                expect(response.body).toHaveProperty('message', 'User register')
                expect(response.body).toHaveProperty('status', 201)
                expect(response.statusCode).toEqual(201)
            })

            test('Should return a message of User exist with status 401', async () => {
                const response = await request(app).post('/api/auth/registerAdmin').send(users[2])
                expect(response.body).toHaveProperty('message', 'User exist!')
                expect(response.body).toHaveProperty('status', 401)
                expect(response.statusCode).toEqual(401)
            })

            test('Should return a message of This route does not allow registration of readers and creators, with status 401', async () => {
                const response = await request(app).post('/api/auth/registerAdmin').send( users[0] )
                expect(response.body).toHaveProperty('message', 'This route does not allow registration of readers and creators')
                expect(response.body).toHaveProperty('status', 401)
                expect(response.statusCode).toEqual(401)
            })

        })
    })

    describe('Router /Register: ', () => {
        describe('Given all the data of user with rol reader and creator', () => {
            test('Should return a response json with a message and status 201', async () => {

                for (const user of users) {
                    if(user.rol != 'admin'){
                        const response = await request(app).post('/api/auth/register').send(user)
    
                        expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))
    
                        expect(response.body).toHaveProperty('message', 'User register')
                        expect(response.body).toHaveProperty('status', 201)
                        expect(response.statusCode).toEqual(201)
                    }
                }

            })

            test('Should return a message of This route does not allow registration of user admin, with status 401', async () => {
                const response = await request(app).post('/api/auth/register').send(users[2])
                expect(response.body).toHaveProperty('message', 'This route does not allow registration of user admin')
                expect(response.body).toHaveProperty('status', 401)
                expect(response.statusCode).toEqual(401)
            })

            test('Should return a message of User exist with status 401', async () => {
                const response = await request(app).post('/api/auth/register').send(users[0])
                expect(response.body).toHaveProperty('message', 'User exist!')
                expect(response.body).toHaveProperty('status', 401)
                expect(response.statusCode).toEqual(401)
            })

        })
    })

    describe('Router /Login', () => {

        const credentials = [
            { email: 'reader@reader.com', password: '12345678' },
            { email: 'easasader@reader.cosasas', password: '12345678' },
            { username: 'reader', password: '123123112' },
        ]

        test('Should return a message of User is login, with status 200', async () => {
            const response = await request(app).post('/api/auth/login').send(credentials[0])
            expect(response.body).toHaveProperty('message', 'User is login')
            expect(response.statusCode).toEqual(200)
        })

        test('Should return a object with the property message, token and status.', async () => {
            const response = await request(app).post('/api/auth/login').send(credentials[0])
            expect(response.body).toHaveProperty('message', 'User is login')
            expect(response.body).toHaveProperty('status', 200)
            expect(response.body).toHaveProperty('token')
            expect(response.statusCode).toEqual(200)
        })

        test('Should return a message of Username or email not exist, with status 401', async () => {
            const response = await request(app).post('/api/auth/login').send(credentials[1])

            expect(response.body).toHaveProperty('message', 'Username or email not exist')
            expect(response.body).toHaveProperty('status', 401)
            expect(response.statusCode).toEqual(401)

        })

        test('Should return a message of Incorrect password , with status 401', async () => {
            const response = await request(app).post('/api/auth/login').send(credentials[2])

            expect(response.body).toHaveProperty('message', 'Incorrect password')
            expect(response.body).toHaveProperty('status', 401)
            expect(response.statusCode).toEqual(401)
        })
    })

    describe('Router /Delete', () => {
        test('Should return a message of Deleted account and status 200', async () => {

            for (const user of users) {
                const response = await request(app).delete(`/api/auth/delete/${user.rol}`)
                expect(response.body).toHaveProperty('message', 'Deleted account')
                expect(response.statusCode).toEqual(200)
            }

        })
    })


})