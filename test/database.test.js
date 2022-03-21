
const {addUserQuery ,EmailhasToken, hasUserExist ,getUserPost ,getUserNameQuery ,addPostQuery ,deletePostQuery ,getSinglePostQuery}=require('../server/database/quries')
const {build}=require('../server/database/config/build')
const { connection }=require('../server/database/config/connection')
/*beforeEach(()=>{
    return build()
})
describe('check Auth query',()=>{
    
    test('add user query when user exist',()=>{
        addUserQuery('mDmQQ7.mDCCESARTqPu1cDNSbgq','farah','farah@gmail.com')
        .then((data)=>expect(data.rows).toBe(1))
        .catch((err)=>expect(err.detail).toEqual('Key (username)=(farah) already exists.'))
    })
    test('add user query',()=>{
        addUserQuery('mDmQQ7.mDCCESARTqPu1cDNSbgq','salam','salam@gmail.com')
        .then((data)=>expect(data.rows.length).toBe(1))
        .catch((err)=> expect(err).toBe('duplicate key value violates unique constraint "users_email_key"'))

    })

    test('add user when email exist',()=>{
        addUserQuery('mDmQQ7.mDCCESARTqPu1cDNSbgq','farah1','farah@gmail.com')
        .then((data)=>expect(data.rows.length).toBe(1))
        .catch((err)=>expect(err.detail).toBe('Key (email)=(farah@gmail.com) already exists.'))

    })
    
})
describe('check if email exist',()=>{
    test('add email already user ',()=>{
        EmailhasToken('farahSH','farah@gmail.com')
        .then((data)=>expect(data.rows.length).toBe(1))
       
    })
    test('add user name already used',()=>{
        EmailhasToken('farah','farahSh@gmail.com')
        .then((data)=>expect(data.rows.length).toBe(1))
    })
    test('add eamil and user name never user',()=>{
        EmailhasToken('haneen','haneen@gmail.com')
        .then(data=>expect(data.rowCount).toBe(0))
    })
})

describe('if user have  account or not',()=>{
    test('when user have acount can log in',()=>{
        hasUserExist('farah')
        .then(data=>expect(data.rowCount).toBe(1))
    })
    test('when user do not have acount',()=>{
        hasUserExist('heba').then((data)=>expect(data.rowCount).toBe(0))
    })
})
describe('profile query',()=>{
    test('get the user posts',()=>{
        getUserPost(1)
        .then((data)=>expect(data.rows).toEqual([
            {
              id: 1,
              title: 'my first post',
              content: 'hello from testing',
              user_id: 1,
              img: null
            },
            {
              id: 2,
              title: 'my secand post',
              content: 'hello from testing',
              user_id: 1,
              img: null
            }
          ]))
    })
    test('return the farah when id =1',()=>{
        getUserNameQuery(1)
        .then(data=>expect(data.rows).toEqual([{ username: 'farah' }]))
    })
    
})
describe('add post',()=>{
    test('return [{"my first post","hello from test","mu posts" ,2, null}]',()=>{
        addPostQuery("my first post","hello from test",3)
        .then((data)=>expect(data.rows).toEqual([
            {
              id: 4,
              title: 'my first post',
              content: 'hello from test',
              user_id: 3,
              img: null
            }
          ]))
    })
})
describe('delete post',()=>{
    test('return the deleted post',()=>{
        deletePostQuery(1,1).then((data)=>expect(data.rows).toEqual( 
            [{
              id: 1,
              title: 'my first post',
              content: 'hello from testing',
              user_id: 1,
              img: null
            }
          ]
      ))
    })
})
describe('get specific post',()=>{
    getSinglePostQuery(2)
    .then((data)=>expect(data.rows).toEqual([
        {
          username: 'farah',
          id: 2,
          user_id: 1,
          title: 'my secand post',
          content: 'hello from testing',
          img: null
        }
      ])
)})
describe('test',()=>{
    test('test ',()=>{
        expect(1).toBe(1)
    })
})
afterAll(()=>{
    connection.end()
})*/