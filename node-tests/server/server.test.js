const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;
describe('Server', () => {
    /*
        it('Should return hello world from response', (done) => {

            request(app)
                .get('/')
                .expect(404)
                // .expect('Hello world!')
                .expect({error: 'Page not found'})
                .end(done);
        });

        it('Should return Page not found from response', (done) => {

            request(app)
                .get('/')
                .expect(404)
                // .expect('Hello world!')
                .expect({error: 'Page not found', name:'Todo App v1.0'})
                .end(done);
        });*/
    describe('GET /', () => {
        //here you can use expect to assert on the full body page with the elements
        it('Should return Page not found from response (using expect on the full body)', (done) => {

            request(app)
                .get('/')
                .expect(404)
                .expect((res) => {
                    // console.log(res.body);
                    expect(res.body).toInclude({
                        error: 'Page not found'
                    });
                })
                .end(done);
        });
    });

    describe('GET /users', () => {
        it('Should return user Miguel from response', (done) => {

            var user = {
                name: 'Miguel',
                age: 25
            };

            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    //console.log(res.body);
                    expect(res.body).toInclude(user);
                })
                .end(done);

        });

    });

});