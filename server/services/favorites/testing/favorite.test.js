const request = require('supertest')
const app = require('../app2.js')
const image_url = 'https://i.stack.imgur.com/NlSfJ.png?s=328&g=1'
const video_url = 'https://www.youtube.com/watch?v=1AhOK4UwAMs'
const idIg = '123456'
const username = 'justin'
let id = {
    post: '',
    story: '',
    igtv: '',
    highlight: ''
}
const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYsInVzZXJuYW1lIjoiZ3JhY2UiLCJlbWFpbCI6ImdyYWNlMUBtYWlsLmNvbSIsImlhdCI6MTYwMDc4OTEwMX0.9-JTIo_H2kO6fwDhTTD-Mk-DRUOzjK45Hz_jOWAMaHE'

describe('GET /favorites/:type successfully', () => {
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

    it('test get favorite posts from wrong url user will return message', (done)=>  {
        request(app)
        .get(`/favorites/wrong`)
        .set('access_token', access_token)
        .set('Accept', 'application/json')
        .then(response => {
            const { body } = response
            expect(body).toHaveProperty('message', 'Data not found')
            expect(response.status).toBe(404)
            done()
        })
    })

    it('test get favorite posts from wrong url user will return message', (done)=>  {
        request(app)
        .get(`/favorites`)
        .set('access_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Img4QG1haWwuY29tIiwidXNlcm5hbWUiOiJoOCIsImlhdCI6MTYwMDc4NzQyN30.oq-ZryrVAtyRyrJUrW2-FLfhJUUOcs46XMhXjb2Ye9U')
        .set('Accept', 'application/json')
        .then(response => {
            const { body } = response
            expect(body).toHaveProperty('message', 'Wrong account!')
            expect(response.status).toBe(401)
            done()
        })
    })

    it('test get favorite with wrong jwt ', (done)=>  {
        request(app)
        .get(`/favorites`)
        .set('access_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYsInVzZXJuYW1lIjoiZ3JhY2UiLCJpYXQiOjE2MDA3ODg1MTd9.IcHcyYTKG47Guhsg9Mi7oJlsycvWVSfKNgwiLaKAdvo')
        .set('Accept', 'application/json')
        .then(response => {
            const { body } = response
            expect(body).toHaveProperty('message', 'Wrong account!')
            expect(response.status).toBe(401)
            done()
        })
    })

})

describe('POST /favorites successfully', () => {
    it('test post favorite posts from login user will return object of new posts', (done) =>  {
        request(app)
        .post(`/favorites/posts`)
        .send({
            image_url,
            idIg,
            username
        })
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
        .send({
            image_url,
            idIg,
            username
        })
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
        .send({
            image_url,
            idIg,
            username
        })
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
        .send({
            image_url,
            idIg,
            username
        })
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

describe('POST /favorites failed', () => {
    it('test add wrong type will return object of new posts', (done) =>  {
        request(app)
        .post(`/favorites/wrong`)
        .send({
            image_url,
            idIg,
            username
        })
        .set('Accept', 'application/json')
        .set('access_token', access_token)
        .then(response => {
            const { body } = response
            expect(body).toHaveProperty('message', 'Data not found')
            expect(response.status).toBe(404)
            done()
        })
    })


})

describe('GET /favorites successfully', () => {
    it('test successfully get all favorites by userLogin email', (done) =>  {
        request(app)
        .get(`/favorites`)
        .set('Accept', 'application/json')
        .set('access_token', access_token)
        .then(response => {
            expect(response).toHaveProperty('body', expect.any(Object))
            expect(response.status).toBe(200)
            done()
        })
    })
})

describe('GET /favorites/:id/:type successfully', () => {
    it('test get favorite post by id from login user will return object selected id', (done) =>  {
        request(app)
        .get(`/favorites/${id.post}/posts`)
        .set('Accept', 'application/json')
        .set('access_token', access_token)
        .then(response => {
            const { body } = response
            expect(body).toHaveProperty('_id', expect.any(String))
            expect(response.status).toBe(200)
            done()
        })
    })

    it('test get favorite highlight by id from login user will return object selected id', (done) =>  {
        request(app)
        .get(`/favorites/${id.highlight}/highlights`)
        .set('Accept', 'application/json')
        .set('access_token', access_token)
        .then(response => {
            const { body } = response
            expect(body).toHaveProperty('_id', expect.any(String))
            expect(response.status).toBe(200)
            done()
        })
    })

    it('test get favorite story by id from login user will return object selected id', (done) =>  {
        request(app)
        .get(`/favorites/${id.story}/stories`)
        .set('Accept', 'application/json')
        .set('access_token', access_token)
        .then(response => {
            const { body } = response
            expect(body).toHaveProperty('_id', expect.any(String))
            expect(response.status).toBe(200)
            done()
        })
    })

    it('test get favorite igtv by id from login user will return object selected id', (done) =>  {
        request(app)
        .get(`/favorites/${id.igtv}/igtvs`)
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

describe('GET /favorites/:id/:type failed', () => {
    it('test failed get favorite post by id will return message error', (done) =>  {
        request(app)
        .get(`/favorites/${id.highlight}/posts`)
        .set('Accept', 'application/json')
        .set('access_token', access_token)
        .then(response => {
            const { body } = response
            expect(body).toHaveProperty('message', 'Data not found')
            expect(response.status).toBe(404)
            done()
        })
    })

    it('test failed get favorite post by wrong id will return message error', (done) =>  {
        request(app)
        .get(`/favorites/1/posts`)
        .set('Accept', 'application/json')
        .set('access_token', access_token)
        .then(response => {
            const { body } = response
            expect(body).toHaveProperty('message', 'Invalid Id')
            expect(response.status).toBe(404)
            done()
        })
    })

    it('test failed get favorite post by wrong link will return message error', (done) =>  {
        request(app)
        .get(`/favorites/${id.highlight}/wrong`)
        .set('Accept', 'application/json')
        .set('access_token', access_token)
        .then(response => {
            const { body } = response
            expect(body).toHaveProperty('message', 'Data not found')
            expect(response.status).toBe(404)
            done()
        })
    })

})

describe('DELETE /favorites failed', () => {
    it('test delete favorite wrong url', (done) =>  {
        request(app)
        .delete(`/favorites/${id.post}/highlight`)
        .set('Accept', 'application/json')
        .set('access_token', access_token)
        .then(response => {
            const { body } = response
            expect(body).toHaveProperty('message', 'Data not found')
            expect(response.status).toBe(404)
            done()
        })
    })



    it('test delete favorite wrong login', (done) =>  {
        request(app)
        .delete(`/favorites/${id.post}/posts`)
        .set('Accept', 'application/json')
        .set('access_token', 'testingwrongaccess_token')
        .then(response => {
            const { body } = response
            console.log(body, 'ini body test del');
            expect(body).toHaveProperty('message', ['Please login first'])
            expect(response.status).toBe(401)
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

    it('test delete favorite wrong url', (done) =>  {
        request(app)
        .delete(`/favorites/${id.post}/posts`)
        .set('Accept', 'application/json')
        .set('access_token', access_token)
        .then(response => {
            const { body } = response
            expect(body).toHaveProperty('message', 'Data not found')
            expect(response.status).toBe(404)
            done()
        })
    })
})

