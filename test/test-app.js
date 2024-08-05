/**
 * Nota: Para evitar estar ejecutando node test/test-app.js
 * cada ves que se necesite, es mejor configurar un script 
 * en nuestro @package_json de la siguiente forma:
 * @Modo_1
 * Este modo solo se especifica un solo archivo de @test
 * y con el @watch test/* escucha cualquier cambio y se 
 * vuelve a ejecutar el test
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * test: "node test/test-app.js --watch test/*"
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * 
 * @Modo_2
 * Este modo indica que todo lo que este en el
 * Directorio @tests , es decir, todos los archivos 
 * que tengan test- al inicio los va a ejecutar y va 
 * ha detectar sus cambios 
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * test: "node --tests --watch test/*" 
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */


const {test, describe, it, mock} = require('node:test')
const assert = require('assert')
const app = require("../src/app")
const request = require('supertest')
const UserService = require('../src/services/userService')
const userService = new UserService()

describe('Initial test', (t) => {
    /** Crear test */
    it('First test', (t) => {
        assert.equal(1,1)
    })
})

/** Testing of app */

describe('Test user routes', (t) => {
    it('should return 200 status code', async (t) => {
        const response = await request(app).get('/users')
        assert.strictEqual(response.statusCode, 200)
    })
    
    /** Agrupar test que retornen un mismo valor esperado */
    it('should return an error on users routes', async (t) => {
    
        await it('should return 404 status code', async (t) => {
            const response = await request(app).get('/user/456')
            assert.strictEqual(response.statusCode, 404)
        })
    
        await it('should return 404 status code', async (t) => {
            const response = await request(app).get('/user/id/456')
            assert.strictEqual(response.statusCode, 404)
        })
    })
})

/** 
 * @_mock
 * Este metodo se encarga de simular funcionabilidades de las funciones
 * de la app
 */
/** EJEMPLO 1 */
// const sum = mock.fn( ( a, b ) => {
    //     return a + b
    // })
    
    // it('should return a correct result', () => {
        //     assert.strictEqual(sum(1,3), 3)
        // })
        
/** EJEMPLO 2 - CON FUNCIENES DE MI APP */
describe('Probando los servcios del usuario', () => {
    /**
     * El siguiente @test probará las respuesta de una consulta a mongodb
     * de todos los usuarios
     * del servicio @var userService
     */
    it('should return a user list', async () => {
        const usersList = [{ id:1, name: "yordhis", lastname:"osuna", phone:"5678", address:"barinas"}]
     
        /** 1. Crear la funcion @mock */
        const getAllUserMock = mock.fn( () => {
            return usersList
        })
    
        /** 2. Reemplasamos la funcion real por la @mock */
        mock.method( userService, 'getAll', getAllUserMock )
    
        /** 3. realizar el test */
        assert.deepStrictEqual(await userService.getAll(), usersList)
    })
    
    /** 
     * El siguiente @test probará las respuesta de un registro de usuarios
     * del servicio @var userService
     */
    it('should return success of user created', () => {
        /** 1. Crear el modelo a registrar */
        const userMock = mock.fn( () => { return { name: "yordhis", lastname:"osuna", phone:"5678", address:"barinas"} })
        
        /** 2. Crear la función mock  */
        const createMock = mock.fn( () => {
            return "Usuario registrado"
        })
        /** 3. Reemplazamos el metodo real por el @createMock */
        mock.method( userService, 'create', createMock )

        /** 3. Realizar test  */
        assert.strictEqual(userService.create(userMock), 'Usuario registrado')

    })
})
