const request = require('supertest')
const app = require('../app')

/**
 * testing GET http reqs for products
*/
describe("GET /v2/products",()=>{
    it('respond whit json a list of products', done => {
        request(app)
        .get('/v2/products')
        .set('Accept', 'application/json')
        .expect('Content-Type',/json/ )
        .expect(200, done)
    })
})
describe("GET /v2/product/:id", ()=>{
    const id = '5ffa0c5d051dfd5d97552662'
    const noExist = '1ffa0c5d051dfd5d97552661'
    it('respond whit json a single product', done =>{
        request(app)
        .get(`/v2/product/${id}`)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })
    
    it('respond with json "the product not found" when the product doesnt exists', done=>{
        request(app)
        .get(`/v2/product/${noExist}`)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(404)
        .expect('{"message":"the product not found"}')
        .end( err =>{
            if(err) done(err)
            done()
        })
    })
    
})

/** Testing POST hhtp request for products schema */

describe("POST /v2/product",()=>{
    it('respond whit json 201 created', done=>{
        const data ={
            name : 'product test',
            size : 15,
            unitaryPrize : 1000,
            description : 'testing post whit mocha'
        }
        request(app)
        .post('/v2/product')
        .send(data)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
        .end( err =>{
            if(err) done(err)
            done()
        })
    })
})