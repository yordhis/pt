/* eslint-disable no-undef */
const app = require('../src/app')
const AuthService = require('../src/modules/auth/authService')
const authService = new AuthService()

const request = require('supertest')
const c = console

describe('Testing the module of Authentication', () => {
    describe('Router /Register: ', () => {

        describe('Given all the data of user with rol reader and creator', () => { 
            const user = [
                { username: 'reader', email: 'reader@reader.com', password: '12345678', rol: 'reader' },
                { username: 'creator', email: 'creator@creator.com', password: '12345678', rol: 'creator' }
            ]
    
            test('Should return a response json with a message and status 201', async () => {
                const response = await request(app).post('/api/auth/register').send(user[0])
    
                expect(response.headers['content-type']).toEqual(
                    expect.stringContaining('json')
                )
                expect(response.body).toEqual({ message: 'User register', status: 201 })
                expect(response.statusCode).toEqual(201)
            })
    
            test('Should return a message of User exist with status 400', () => {
                request( app ).post('/api/auth/register')
            })

        })

    })

    describe('Router /Login', () => {

    })

    describe('Router /Delete', ()=>{
        test('Should return a status 200', async () => {
            const response = await request( app ).delete('/api/auth/delete')
            expect(response.statusCode).toEqual(200)
        })

        test('Should return a message of account destory and status 200', async () => {
            const response = await request( app ).delete('/api/auth/delete')
        })
    })


})