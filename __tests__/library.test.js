/* eslint-disable no-undef */
const request = require('supertest')

const app = require('../src/app')
const LibraryService = require('../src/modules/library/libraryService')

  



describe('Testing the multimedia content module', () => {
    describe('Router [Get]/libreries', () => {

        test('Should return status 200', async () => {
            const response = await request( app ).get('/api/libraries')
            expect(response.statusCode).toEqual(200)
        })

        test('Should return a object json witch the property data, status and message.', async () => {
            const response = await request( app ).get('/api/libraries')
            expect(response.body).toHaveProperty('data')
            expect(response.body).toHaveProperty('status', 200)
            expect(response.body).toHaveProperty('message', 'Ok')
                
            expect(response.statusCode).toEqual(200)
        })

        test('The data property is expected to be an array with objects', async () => {
            const response = await request( app ).get('/api/libraries')
            
            expect(response.body).toHaveProperty('data')
            expect(response.body.data[0]).toHaveProperty('id')
            expect(response.body.data[0]).toHaveProperty('theme')
            expect(response.body.data[0]).toHaveProperty('title')
            expect(response.body.data[0]).toHaveProperty('description')
            expect(response.body.data[0]).toHaveProperty('links')
            expect(response.body.data[0]).toHaveProperty('views')
            expect(response.body.data[0]).toHaveProperty('buttons')
            expect(response.body.data[0]).toHaveProperty('author')
            expect(response.body.data[0]).toHaveProperty('credit')

            expect(response.statusCode).toEqual(200)
        })

        describe('Validating responses based on user role', () => {
            const users = [
                { username: 'reader', email: 'reader@reader.com', password: '12345678', rol: 'reader', modules:['libraries'], permissions:['GET']  },
                { username: 'creator', email: 'creator@creator.com', password: '12345678', rol: 'creator', modules:['libraries'], permissions:['GET', 'PUT'] },
                { username: 'admin', email: 'admin@admin.com', password: '12345678', rol: 'admin', modules:['libraries'], permissions:['GET', 'POST', 'PUT', 'DELETE'] },
            ]

            test('For unregistered users it should return resources without multimedia content', async () => {
                const response = await request( app ).get('/api/libraries')
                expect(response.body).toHaveProperty('data')
                expect(response.body.data[0]).toHaveProperty('links', null)
                expect(response.body.data[0]).toHaveProperty('buttons', null)
            })
    
            test('Should return the get buttons for the *Reader* role.', async () => {
        
                const library = new LibraryService(users[0])
                const result = await library.all() 
                
                expect(result[0]).toHaveProperty('buttons')
                expect(result[0].buttons).toHaveProperty('get')
                expect(result[0].buttons.get).toHaveProperty('action')
                expect(result[0].buttons.get).toHaveProperty('method')
            
    
            })

            test('Should return the get and put buttons for the *Creator* role.', async () => {
        
                const library = new LibraryService(users[1])
                const result = await library.all() 
                
                expect(result[0]).toHaveProperty('buttons')
                expect(result[0].buttons).toHaveProperty('get')
                expect(result[0].buttons.get).toHaveProperty('action')
                expect(result[0].buttons.get).toHaveProperty('method')
                expect(result[0].buttons).toHaveProperty('put')
                expect(result[0].buttons.put).toHaveProperty('action')
                expect(result[0].buttons.put).toHaveProperty('method')
    
            })

            test('Should return the all buttons for the *Admin* role.', async () => {
        
                const library = new LibraryService(users[2])
                const result = await library.all() 
                
                expect(result[0]).toHaveProperty('buttons')

                expect(result[0].buttons).toHaveProperty('get')
                expect(result[0].buttons.get).toHaveProperty('action')
                expect(result[0].buttons.get).toHaveProperty('method')
                expect(result[0].buttons.get.method).toMatch(/GET/)

                expect(result[0].buttons).toHaveProperty('put')
                expect(result[0].buttons.put).toHaveProperty('action')
                expect(result[0].buttons.put).toHaveProperty('method')
                expect(result[0].buttons.put.method).toMatch(/PUT/)

                expect(result[0].buttons).toHaveProperty('delete')
                expect(result[0].buttons.delete).toHaveProperty('action')
                expect(result[0].buttons.delete).toHaveProperty('method')
                expect(result[0].buttons.delete.method).toMatch(/DELETE/)
    
            })

            test('Should return the all the content multimedia in tha property links.', async () => {
        
                const library = new LibraryService(users[2])
                const result = await library.all() 
                
                expect( result[0] ).toHaveProperty('links')

              for (const key in result[0].links ) {
                if (Object.prototype.hasOwnProperty.call(result[0].links, key)) {
                    const element = result[0].links[key]
                    expect( element.length > 0 ).toBeTruthy()
                }
              }
    
            })

        })

       
    })

    describe('Router [Post]/libreries', () => {
        
        jest.mock('../src/modules/library/libraryService')
        const mockUpdate = jest
            .fn(() => {
                return {
                    message: 'Resource register',
                    status: 201,
                }
            })
        const mockRegister = jest
            .fn(() => {
                return {
                    message: 'Resource register',
                    status: 201,
                }
            })
    
        LibraryService.mockImplementation(() => {
            return {
                register: mockRegister
               
            }
        })
        LibraryService.mockImplementation(() => {
            return {
                update: mockUpdate
            }
        })

    })
})