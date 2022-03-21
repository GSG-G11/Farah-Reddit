const request = require('supertest')
const app =require('../server/app')
describe('test api routes',()=>{ 
 it('test posts route',(done)=>{
     request(app)
     .get('/api/v1/posts')
     .expect('Content-Type', 'application/json; charset=utf-8')
     .expect(200)
     .end((err,res)=>{
         if(err) return done(err)
        expect(res.body).toEqual([
            {
                "username": "farah",
                "user_id": 1,
                "id": 1,
                "title": "my first post",
                "content": "hello from testing",
                "img": null
            },
            {
                "username": "farah",
                "user_id": 1,
                "id": 2,
                "title": "my secand post",
                "content": "hello from testing",
                "img": null
            },
            {
                "username": "sara",
                "user_id": 2,
                "id": 3,
                "title": "my first post",
                "content": "hello from testing",
                "img": null
            }
        ])
        return done()
     })
 })
 it('test get single posts info',(done)=>{
     request(app)
     .get('/api/v1/post/1')
     .expect('Content-Type', 'application/json; charset=utf-8')
    .expect(200)
    .end((err,res)=>{
        if(err) return done(err)
        expect(res.body).toEqual([
            {
                "username": "farah",
                "id": 1,
                "user_id": 1,
                "title": "my first post",
                "content": "hello from testing",
                "img": null
            }
        ])
        done()
    })
 })
 it('test profile',(done)=>{
    request(app)
    .get('/profile/1')
    .expect(200)
    .expect('Content-Type', 'application/json; charset=utf-8')
    .end((err,res)=>{
        expect(res.body).toEqual([
            {
                "id": 1,
                "title": "my first post",
                "content": "hello from testing",
                "user_id": 1,
                "img": null
            },
            {
                "id": 2,
                "title": "my secand post",
                "content": "hello from testing",
                "user_id": 1,
                "img": null
            }
        ])
    })
 })
it('test signup',(done)=>{
    request(app)
    .post('/api/v1/signup')
    .send({username:'farahismail',password:123456789,email:'farahismail@gmail.com'})
    .expect(200)
    .expect('Content-Type', 'application/json; charset=utf-8')
    .end((err,res)=>{
        if(err) return done(err)
        expect(res.body).toEqual("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZhcmFoSCIsImlkIjozMCwiaWF0IjoxNjQ3ODc4Mzc2fQ.QhvY_QcMb8LQ3LaH5dL5RcSqsBIzNJSY7UV7EQ_jRak")
        return done()
    })
})
})
