const expect = require('expect');
//rewire works to mimic the javascript file 
const rewire = require('rewire');

//in this case app.js
var app = rewire('./app');

describe('App', () => {

    //inilialize the rewire module to mimic the functions of db.js
    var db = {
        saveUser: expect.createSpy()
    };

    //set the db object
    app.__set__('db', db);

    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy();
        expect(spy).toHaveBeenCalled();
    });

    it('should call the spy correctly with the object', () => {
        var spy = expect.createSpy();
        spy({ name: 'Juan', age: 23 });
        expect(spy).toHaveBeenCalledWith({ name: 'Juan', age: 23 });
    });


    it('should call saveUser with user object', () => {
        var email = 'mail@mail.com';
        var password = '123asd';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({ email, password });

    });
});