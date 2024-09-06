/* eslint-disable no-undef */
const app = require('../src/app')
const RolService = require('../src/modules/rol/rolService')
const rolService = new RolService()

const { mock } = require('node:test')
const chai = require('chai')
const chaiHttp = require('chai-http')
chai.use(chaiHttp)

const { expect, assert, request } = chai

const c = console


describe('*Probando el módulo de Roles', () => {
    describe('**Ruta /Register',  () => {
        it('Deberia retornar el siguiente mensaje: ROL AGREGADO. y 201.', done => {
            const rolMock = mock.fn(()=>{
                return { name: 'reader', permission: ['GET'], modules: ['libraries'] }
            })

            const registerRolMock = mock.fn(() => {
                return { message: 'Rol agregado.', status: 201 }
            })

            mock.method(rolService, 'register', registerRolMock)

            assert.deepStrictEqual(rolService.register(rolMock), { message: 'Rol agregado.', status: 201 })
            done()
        })
    })
    describe('**Ruta /Geters', () => {

    })

    describe('**Ruta /Update', () => {

    })

    describe('**Ruta /Delete', () => {

    })
})