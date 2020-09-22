const request = require('supertest')
const app = require('../app.js')
const url = 'ini ceritanya url'
let id = {
    post: '',
    story: '',
    igtv: '',
    highlight: ''
}
const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdyYWNlY29yaW5lQG1haWwuY29tIiwidXNlcm5hbWUiOiJzaWFwYSIsImlhdCI6MTYwMDc3MzQ4OX0.QAasX5utUdGUfyVdqzZ8TxYCiDUK80fldbned_pF-Ww'

describe('GET /favorites successfully', () => {
    it('test get favorite posts from login user will return array of posts', (done)=>  {
        request(app)
        .get(`/favorites/posts`)
        .set('Accept', 'application/json')
        .set('access_token', access_token)
        .then(response => {
            const { body } = response
            expect(body).toHaveProperty('posts', expect.any(Array))
            expect(response.status).toBe(200)
            done()
        })
    })

    it('test get favorite stories from login user will return array of stories', (done)=>  {
        request(app)
        .get(`/favorites/stories`)
        .set('Accept', 'application/json')
        .set('access_token', access_token)
        .then(response => {
            const { body } = response
            expect(body).toHaveProperty('stories', expect.any(Array))
            expect(response.status).toBe(200)
            done()
        })
    })

    it('test get favorite highlight from login user will return array of highlights', (done)=>  {
        request(app)
        .get(`/favorites/highlights`)
        .set('Accept', 'application/json')
        .set('access_token', access_token)
        .then(response => {
            const { body } = response
            expect(body).toHaveProperty('highlights', expect.any(Array))
            expect(response.status).toBe(200)
            done()
        })
    })

    it('test get favorite igtvs from login user will return array of igtvs', (done)=>  {
        request(app)
        .get(`/favorites/igtvs`)
        .set('Accept', 'application/json')
        .set('access_token', access_token)
        .then(response => {
            const { body } = response
            expect(body).toHaveProperty('igtvs', expect.any(Array))
            expect(response.status).toBe(200)
            done()
        })
    })
})

describe('GET /favorites failed', () => {
    it('test get favorite posts from wrong login user will return message', (done)=>  {
        request(app)
        .get(`/favorites/posts`)
        .set('Accept', 'application/json')
        .then(response => {
            const { body } = response
            expect(body).toHaveProperty('message', ['Please login first'])
            expect(response.status).toBe(401)
            done()
        })
    })

    it('test get favorite stories from wrong login user will return message', (done)=>  {
        request(app)
        .get(`/favorites/stories`)
        .set('Accept', 'application/json')
        .then(response => {
            const { body } = response
            expect(body).toHaveProperty('message', ['Please login first'])
            expect(response.status).toBe(401)
            done()
        })
    })

    it('test get favorite highlight from wrong login user will return message', (done)=>  {
        request(app)
        .get(`/favorites/highlight`)
        .set('Accept', 'application/json')
        .then(response => {
            const { body } = response
            expect(body).toHaveProperty('message', ['Please login first'])
            expect(response.status).toBe(401)
            done()
        })
    })

    it('test get favorite igtv from wrong login user will return message', (done)=>  {
        request(app)
        .get(`/favorites/igtv`)
        .set('Accept', 'application/json')
        .then(response => {
            const { body } = response
            expect(body).toHaveProperty('message', ['Please login first'])
            expect(response.status).toBe(401)
            done()
        })
    })
})

describe('POST /favorites successfully', () => {
    it('test post favorite posts from login user will return object of new posts', (done) =>  {
        request(app)
        .post(`/favorites/posts`)
        .send({url})
        .set('Accept', 'application/json')
        .set('access_token', access_token)
        .then(response => {
            const { body } = response
            expect(body).toHaveProperty('posts', expect.any(Object))
            expect(response.status).toBe(201)
            id.post = body.posts._id
            done()
        })
    })

    it('test post favorite stories from login user will return object of stories', (done) =>  {
        request(app)
        .post(`/favorites/stories`)
        .send({url})
        .set('Accept', 'application/json')
        .set('access_token', access_token)
        .then(response => {
            const { body } = response
            expect(body).toHaveProperty('stories', expect.any(Object))
            id.story = body.stories._id
            expect(response.status).toBe(201)
            done()
        })
    })

    it('test post favorite highlight from login user will return object of highlights', (done) =>  {
        request(app)
        .post(`/favorites/highlights`)
        .send({url})
        .set('Accept', 'application/json')
        .set('access_token', access_token)
        .then(response => {
            const { body } = response
            expect(body).toHaveProperty('highlights', expect.any(Object))
            expect(response.status).toBe(201)
            id.highlight = body.highlights._id
            done()
        })
    })

    it('test post favorite igtv from login user will return object of igtv', (done) =>  {
        request(app)
        .post(`/favorites/igtvs`)
        .send({url})
        .set('Accept', 'application/json')
        .set('access_token', access_token)
        .then(response => {
            const { body } = response
            expect(body).toHaveProperty('igtvs', expect.any(Object))
            expect(response.status).toBe(201)
            id.igtv = body.igtvs._id
            done()
        })
    })
})



describe('DELETE /favorites successfully', () => {
    it('test delete favorite posts from login user will return the deleted new post', (done) =>  {
        request(app)
        .delete(`/favorites/${id.post}/posts`)
        .set('Accept', 'application/json')
        .set('access_token', access_token)
        .then(response => {
            const { body } = response
            expect(body).toHaveProperty('_id', expect.any(String))
            expect(response.status).toBe(200)
            done()
        })
    })

    it('test update favorite stories from login user will return the deleted stories', (done) =>  {
        request(app)
        .delete(`/favorites/${id.story}/stories`)
        .set('Accept', 'application/json')
        .set('access_token', access_token)
        .then(response => {
            const { body } = response
            expect(body).toHaveProperty('_id', expect.any(String))
            expect(response.status).toBe(200)
            done()
        })
    })

    it('test update favorite highlight from login user will return the deleted highlights', (done) =>  {
        request(app)
        .delete(`/favorites/${id.highlight}/highlights`)
        .set('Accept', 'application/json')
        .set('access_token', access_token)
        .then(response => {
            const { body } = response
            expect(body).toHaveProperty('_id', expect.any(String))
            expect(response.status).toBe(200)
            done()
        })
    })

    it('test update favorite igtv from login user will return the deleted igtv', (done) =>  {
        request(app)
        .delete(`/favorites/${id.igtv}/igtvs`)
        .set('Accept', 'application/json')
        .set('access_token', access_token)
        .then(response => {
            const { body } = response
            expect(body).toHaveProperty('_id', expect.any(String))
            expect(response.status).toBe(200)
            done()
        })
    })
})