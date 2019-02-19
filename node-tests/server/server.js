const express = require('express');

var app = express();

app.get('/', (req, res) => {
    // res.status(200).send('Hello world!');

    res.status(404).send({
        error: 'Page not found',
        name: 'Todo App v1.0'
    });

});


app.get('/users', (req, res) => {

    var users = [
        {
            name: 'Miguel',
            age: 25
        },
        {
            name: 'Robert',
            age: 55
        }
    ]

    res.send(users);

});

app.listen(3000, () => {
    console.log(`****Server is up and running on port ${3000} ****\n `);
});


module.exports.app = app;