/* eslint-disable no-undef */
// const request = require('supertest')

// const app = require('../src/app')
const LibraryService = require('../src/modules/library/libraryService')
jest.mock('../src/modules/library/libraryService')
const mockAll = jest.fn(( user ) => {

        return [
                {
                    id:'65464654',
                    theme:'ciencias',
                    title: 'Fisica cuantica mock',
                    description: 'Estudio de los mock cuanticos',
                    links: user.rol == 'readertxt' ? null :{ image: ['urls'], video: ['urls'], txt: ['urls'], audio: ['urls'] },
                    views: 100,
                    buttons: user.rol == 'readertxt' ? null : { 
                        get:{ action:'url-action', method:'GET' }, 
                        put:{ action:'url-action', method:'PUT' },
                        delete:{ action:'url-action', method:'DELETE' },
                    },
                    author: 'creador del contenido',
                    credit: 'usuario creador',
                }
            ]
        
        
    })
const mockUpdate = jest.fn(() => {
        return {
            message: 'Resource update',
            status: 200,
        }
    })

const mockRegister = jest.fn((data) => {

        if(data){
            return {
                message: 'Resource register',
                status: 201,
            }
        }

    })
const mockDelete = jest.fn((id) => {

        if(id){
            return {
                message: 'Resource delete',
                status: 200,
            }
        }

    })

LibraryService.mockImplementation(() => {
    return {
        register: mockRegister,
        update: mockUpdate,
        all: mockAll,
        destroy: mockDelete,
    }
})
  
describe('Testing the multimedia content module', () => {

    describe('Router [GET]/libreries', () => {
        const users = [
            { username: 'reader', email: 'reader@reader.com', password: '12345678', rol: 'reader', modules:['libraries'], permissions:['GET'],  profile:{} },
            { username: 'creator', email: 'creator@creator.com', password: '12345678', rol: 'creator', modules:['libraries'], permissions:['GET', 'PUT'],  profile:{} },
            { username: 'admin', email: 'admin@admin.com', password: '12345678', rol: 'admin', modules:['libraries'], permissions:['GET', 'POST', 'PUT', 'DELETE'],  profile:{} },
            { username: 'anonimo', email: 'anonimo@anonimo.com', password: '12345678', rol: 'readertxt', modules:['libraries'], permissions:[],  profile:{} },
        ]

        test('The data property is expected to be an array with objects', async () => {
            const library = new LibraryService()
            const result = await library.all(users[3]) 
            
            expect(result[0]).toHaveProperty('id')
            expect(result[0]).toHaveProperty('theme')
            expect(result[0]).toHaveProperty('title')
            expect(result[0]).toHaveProperty('description')
            expect(result[0]).toHaveProperty('links')
            expect(result[0]).toHaveProperty('views')
            expect(result[0]).toHaveProperty('buttons')
            expect(result[0]).toHaveProperty('author')
            expect(result[0]).toHaveProperty('credit')
        })

        describe('Validating responses based on user role', () => {
            

            test('For unregistered users it should return resources without multimedia content', async () => {
                const library = new LibraryService()
                const result = await library.all(users[3]) 
                expect(result[0]).toHaveProperty('links', null)
                expect(result[0]).toHaveProperty('buttons', null)
            })
    
            test('Should return the get buttons for the *Reader* role.', async () => {
        
                const library = new LibraryService()
                const result = await library.all(users[0]) 
                
                expect(result[0]).toHaveProperty('buttons')
                expect(result[0].buttons).toHaveProperty('get')
                expect(result[0].buttons.get).toHaveProperty('action')
                expect(result[0].buttons.get).toHaveProperty('method')
            
    
            })

            test('Should return the get and put buttons for the *Creator* role.', async () => {
        
                const library = new LibraryService()
                const result = await library.all(users[1]) 
                
                expect(result[0]).toHaveProperty('buttons')
                expect(result[0].buttons).toHaveProperty('get')
                expect(result[0].buttons.get).toHaveProperty('action')
                expect(result[0].buttons.get).toHaveProperty('method')
                expect(result[0].buttons).toHaveProperty('put')
                expect(result[0].buttons.put).toHaveProperty('action')
                expect(result[0].buttons.put).toHaveProperty('method')
    
            })

            test('Should return the all buttons for the *Admin* role.', async () => {
        
                const library = new LibraryService()
                const result = await library.all(users[2]) 
                
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
        
                const library = new LibraryService()
                const result = await library.all(users[2]) 
                
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

    describe('Router [POST]/libreries', () => {
        
       const libraryMock = {
            theme:'ciencias',
            title: 'Fisica cuantica mock 2',
            description: 'Estudio de los mock cuanticos',
            links: { image: ['urls'], video: ['urls'], txt: ['urls'], audio: ['urls'] },
            views: 100,
            buttons: { 
                get:{ action:'url-action', method:'GET' }, 
                put:{ action:'url-action', method:'PUT' },
                delete:{ action:'url-action', method:'DELETE' },
            },
            author: 'creador del contenido',
            credit: 'usuario creador',
        }

        test('Should return of status 201 and a message Resource register', async () => {
            const library = new LibraryService()
            const result = await library.register(libraryMock) 

            expect(result).toEqual({ message: 'Resource register', status: 201 })

        })
       

    })

    describe('Router [PUT]/libreries', () => {
        
       const libraryMock = {
            theme:'ciencias',
            title: 'Fisica cuantica mock 2',
            description: 'Estudio de los mock cuanticos',
            links: { image: ['urls'], video: ['urls'], txt: ['urls'], audio: ['urls'] },
            views: 100,
            buttons: { 
                get:{ action:'url-action', method:'GET' }, 
                put:{ action:'url-action', method:'PUT' },
                delete:{ action:'url-action', method:'DELETE' },
            },
            author: 'creador del contenido',
            credit: 'usuario creador',
        }

        test('Should return of status 200 and a message Resouce update', async () => {
            const library = new LibraryService()
            const result = await library.update(libraryMock) 

            expect(result).toEqual({ message: 'Resource update', status: 200 })

        })
       

    })

    describe('Router [DELETE]/libreries', () => {

        test('Should return of status 200 and a message Resouce delete', async () => {
            const library = new LibraryService()
            const result = await library.destroy('21') 

            expect(result).toEqual({ message: 'Resource delete', status: 200 })

        })
       

    })
    
})