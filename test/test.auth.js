/* eslint-disable no-undef */
const app = require('../src/app')

const chai = require('chai')
const chaiHttp = require('chai-http')
chai.use(chaiHttp)

const { expect, request } = chai

const c = console




describe('Probando el modulo de Autenticación', () => {

    describe('Ruta /Login: ', () => {

        it('Login debe retornar status 200 si las credenciales son aprobadas y el token', done => {
            request(app)
                .post('/api/auth/login')
                .send({ username: 'juan', password: '12345678' })
                .end((err, res) => {
                    if (err) return c.error(err.message)
                    expect(res.body).to.have.property('token')
                    expect(res.statusCode).to.have.equal(200)
                    done()
                })
        })

        it('Login debe retornar 401 si las credenciales no son aprobadas, con un objeto con las propiedates message y status', done => {
            request(app)
                .post('/api/auth/login')
                .send({ username: 'juan', password: '1234568' })
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
                .send({ email: 'yordhis.10@gmail.com', password:'321313213'})
                .end( ( err, res ) => {
                    if( err ) return c.error( err.message )

                    expect( res.body.message ).to.have.equal('Contraseña incorrecta')
                    done()
                })
        })

    })

    describe('Ruta /Register: ', () => {

    })
})