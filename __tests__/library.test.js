/* eslint-disable no-undef */
const request = require('supertest')

const app = require('../src/app')


describe('Testing the multimedia content module', () => {
    describe('Router [Get]/libreries', () => {
        test('Should return the content without multimedia links', async () => {
            const response = await request( app ).get('/api/libreries')

            expect(response.statusCode).toEqual(200)
        })
    })
})