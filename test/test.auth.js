/* eslint-disable no-undef */
const app = require('../src/app')

// const { mock } = require('node:test')
const chai = require('chai')
const chaiHttp = require('chai-http')
chai.use(chaiHttp)

const { expect, assert, request } = chai

const c = console




describe('*Probando el modulo de Autenticación', () => {
    describe('**Ruta /Register: ', () => {

        it('Validando registro, Se espera el mensaje USUARIO REGISTRADO y estatus 201', done => {
            request(app)
                .post('/api/auth/registerAdmin')
                .send({ username: 'admin', email: 'admin@admin.com', password: '12345678', rol: 'admin' })
                .end((err, res) => {
                    if (err) return c.error(err.message)

                    expect(res.body).to.have.property('message')
                    expect(res.body).to.have.property('status')
                    assert.equal(res.body.message, 'Usuario registrado')
                    expect(res.statusCode).to.have.equal(201)
                    done()
                    
                })
        })

        it('Deberia retornar un mensaje ESTA RUTA NO ESTÁ AUTORIZADA... y estatus 401', done => {
            request(app)
                .post('/api/auth/registerAdmin')
                .send({ username: 'admin22', email: 'admin22@admin.com', password: '12345678', rol: 'reader' })
                .end((err, res) => {
                    if (err) return c.error(err.message)

                    expect(res.body).to.have.property('message')
                    expect(res.body).to.have.property('status')
                    assert.equal(res.body.message, 'Esta ruta no está autorizada para registrar usuario lectores o creadores')
                    expect(res.statusCode).to.have.equal(401)
                    done()
                    
                })
        })

        it('Deberia retornar un mensaje ESTA RUTA NO ESTÁ AUTORIZADA PARA ADMIN... y estatus 401', done => {
            request(app)
                .post('/api/auth/register')
                .send({ username: 'admin22', email: 'admin22@admin.com', password: '12345678', rol: 'admin' })
                .end((err, res) => {
                    if (err) return c.error(err.message)

                    expect(res.body).to.have.property('message')
                    expect(res.body).to.have.property('status')
                    assert.equal(res.body.message, 'Esta ruta no está autorizada para registrar usuario administrador')
                    expect(res.statusCode).to.have.equal(401)
                    done()
                    
                })
        })

        it('Validando email, se espera el mensaje EL EMAIL YA EXISTE y estatus 401', done => {
            request(app)
                .post('/api/auth/register')
                .send({ email: 'admin@admin.com', password: '12345678', rol: 'reader' })
                .end((err, res) => {
                    if (err) return c.error(err.message)

                    expect(res.body).to.have.property('message')
                    expect(res.body).to.have.property('status')

                    assert.equal(res.body.message, 'El email ya existe')
                    expect(res.statusCode).to.have.equal(401)

                    done()

                })
        })

        it('Validando username, se espera el mensaje EL NOMBRE DE USUARIO YA EXISTE! y estatus 401', done => {
            request(app)
                .post('/api/auth/register')
                .send({ username: 'admin', password: '12345678', rol: 'reader' })
                .end((err, res) => {
                    if (err) return c.error(err.message)

                    expect(res.body).to.have.property('message')
                    expect(res.body).to.have.property('status')

                    assert.equal(res.body.message, 'El nombre de usuario ya existe!')
                    expect(res.statusCode).to.have.equal(401)

                    done()

                })
        })

        it('Validando rol, se espera el mensaje ROL INVALIDO! y estatus 401', done => {
            request(app)
                .post('/api/auth/register')
                .send({ username: 'admin', password: '12345678', rol: 'readerS' })
                .end((err, res) => {
                    if (err) return c.error(err.message)

                    expect(res.body).to.have.property('message')
                    expect(res.body).to.have.property('status')

                    assert.equal(res.body.message, 'Rol invalido!')
                    expect(res.statusCode).to.have.equal(401)

                    done()

                })
        })

        it('Validando rol admin, se espera el mensaje ROL INVALIDO! y estatus 401', done => {
            request(app)
                .post('/api/auth/registerAdmin')
                .send({ username: 'admin', password: '12345678', rol: 'readerS' })
                .end((err, res) => {
                    if (err) return c.error(err.message)

                    expect(res.body).to.have.property('message')
                    expect(res.body).to.have.property('status')

                    assert.equal(res.body.message, 'Rol invalido!')
                    expect(res.statusCode).to.have.equal(401)

                    done()

                })
        })
    })

    describe('**Ruta /Login: ', () => {

        it('Login debe retornar status 200 si las credenciales son aprobadas y el token', done => {
            request(app)
                .post('/api/auth/login')
                .send({ username: 'admin', password: '12345678' })
                .end((err, res) => {
                    if (err) return c.error(err.message)
                    expect(res.body).to.have.property('token')
                    expect(res.statusCode).to.have.equal(200)
                    done()
                })
        })

        it('Login falló, debe retornar 401, con las propiedates message y status', done => {
            request(app)
                .post('/api/auth/login')
                .send({ username: 'admin2', password: '5465645' })
                .end((err, res) => {
                    if (err) return c.error(err.message)
                    expect(res.body).to.have.property('message')
                    expect(res.body).to.have.property('status')
                    expect(res.statusCode).to.have.equal(401)
                    done()

                })
        })

        it('Login debe retornar un mensaje de CONTRASEÑA INCORRECTA', done => {
            request(app)
                .post('/api/auth/login')
                .send({ email: 'admin@admin.com', password: '321313213' })
                .end((err, res) => {
                    if (err) return c.error(err.message)
                    expect(res.statusCode).to.have.equal(401)
                    expect(res.body.message).to.have.equal('Contraseña incorrecta')
                    done()
                })
        })

        it('Login debe retornar un mensaje de USUARIO O EMAIL INVALIDOS', done => {
            request(app)
                .post('/api/auth/login')
                .send({ email: 'yordhis.1440@gmail.com', password: '12345678' })
                .end((err, res) => {
                    if (err) return c.error(err.message)
                    expect(res.statusCode).to.have.equal(401)
                    assert.strictEqual(res.body.message, 'Usuario o email invalidos')
                    done()
                })
        })

    })


    describe('**Ruta /Register/Delete: ', () => {

        it('Se espera el mensaje CUENTA ELIMINADA y estatus 200', done => {

            request(app)
                .delete('/api/auth/admin')
                .end((err, res) => {
                    if (err) return c.error(err.message)

                    // expect(res.body).to.have.property('message')
                    // expect(res.body).to.have.property('status').with.a(200)
                    assert.strictEqual(res.body.message, 'Cuenta eliminada')
                    expect(res.statusCode).to.equal(200)
                    done()

                })
        })
    })


})