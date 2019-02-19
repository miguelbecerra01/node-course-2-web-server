const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {

    describe('#add', () => {
        it('should add two numbers', () => {
            var res = utils.add(33, 11);

            expect(res).toBe(44, `Expected 44, but got ${res}`);
            expect(res).toBeA('number');
            //if (res != 44) {
            //    throw new Error(`expected 44, but got ${res}`);
            //}

        });

        //done its used to tell mocha that this is a async test! otherwise will not be called
        it('Should add two numbers async', (done) => {

            //must be an async function call with the callback, "sum" is the callback returned from utils
            utils.asyncAdd(1, 2, (sum) => {
                expect(sum).toBe(3, `Expected 3 but got ${sum}`).toBeA('number');
                //tell mocha that the test is done..
                done();
            });
        });
    });

    describe('#square', () => {
        it('Should square a number', () => {
            var number = 2;
            var square = number * number;
            var res = utils.square(number);


            expect(res).toBe(4, `Expected 4 but got ${res}`).toBeA('number', 'expected a number');
            //if (res != square) {
            //    throw new Error(`Expected 4 but got ${res}`);
            //}

        });


        it('Shoud square a number Async', (done) => {

            utils.asyncSquare(3, (square) => {
                expect(square).toBe(9, `Expected 9 but got ${square}`).toBeA('number');
                done();
            });
        });
    });

    describe('#other', () => {

        it('Shoud expect some values', () => {
            // expect({ name: 'miguel' }).toNotEqual({ name: 'Miguel' });
            // expect([2,3,4]).toInclude(5);

            //With include compares if the value is in the object or equal.
            // With exclude compares if the value is NOT in the object or not eequal

            expect({
                name: 'Miguel',
                age: 32,
                location: 'Chimbarongo'
            }).toExclude({
                age: 21
            });
        });
    });

    describe('#setName', () => {
        it('Should return user with fullname', () => {

            var user = {
                firstName: '',
                lastName: '',
                age: 25
            };

            var fullName = 'Michael Anderson';

            utils.setName(user, fullName);

            expect(user).toInclude({
                firstName: fullName.split(' ')[0],
                lastName: fullName.split(' ')[1]
            });

            expect(user).toBeA('object');

        });
    });


});