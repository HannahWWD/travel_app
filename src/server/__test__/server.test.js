// import { updateDataBase } from '../index'
import 'babel-polyfill'
const server =require('../index')

const request = require('supertest');


// const updateDatabase = require('../index');

// test('post', done =>{
//     expect(updateDatabase).toBeDefined();
//     done()
// })

describe('test get key', () => {

    // afterEach(async () => {
    //     await app.close();
    // });
    

    afterAll(() => {
        server.close();
    });

    it("should return 200", async () => {
        const res = await request(server).get('/get-key')

        expect(res.statusCode).toEqual(200);

    })

})



// describe('Post Endpoints', () => {
//     it('should create a new post', async () => {
//       const res = await request(app)
//         .post('/api/posts')
//         .send({
//           userId: 1,
//           title: 'test is cool',
//         })
//       expect(res.statusCode).toEqual(201)
//       expect(res.body).toHaveProperty('post')
//     })
//   })
