const {connection}=require('../server/database/config/connection')
const {build}=require('../server/database/config/build')
const { addPostQuery,getPostsQuery,getUserPost ,EmailhasToken ,hasUserExist ,addUserQuery }=require('../server/database/quries/index')

beforeEach(()=>{
    return build()
})



describe('check Auth',()=>{
    test('email has token',()=>{
       return EmailhasToken('sara@gmail.com','sara').then((data)=>{
            expect(data.rows.length).toBe(0)
           })
    })
    test('has user exits',()=>{
       return hasUserExist('sara@gmail.com').then((data)=>{
            expect(data.rows.length).toBe(0)
           
        })
    })
    test('add user query',()=>{
        return addUserQuery('$2b$10$Rr7cSsboivbjEF4/vU8SrelAdpmDmQQ7.mDCCESARTqPu1cDNSbgq','ahmmed1234','ahmed@gmail.com')
        .then((data)=>{
            expect(data.rows.length).toBe(1)
           
        })
    })
    test('if uer exist',()=>{
        return hasUserExist('ahmmed1234')
        .then((data)=>{
            expect(data.rows.length).toBe(0)
           
        })
    })
})
describe('posts queries',()=>{
    test('add post query',()=>{
        return addPostQuery("mypost","my post us here",1,'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg')
        
        .then((data)=>{
            expect(data.rows.length).toBe(0)}) 
    })

   test('get all post',()=>{ 
       return getPostsQuery().then((data)=>{
        expect(data.rows.length).toBe(0)
       
    })})

   
})
afterAll(()=>{
    return connection.end()
})