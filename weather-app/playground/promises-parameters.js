var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Arguments must be numbers');
            }
        }, 2000);
    });
};

asyncAdd(1, 2).then((message) => {
    console.log('Result', message);

}, (errorMessage) => {
    console.log('Error', errorMessage);
});

//promise chaining

asyncAdd(1, 2).then((result) => {
    console.log('****promise chaining*******');
    console.log('Result', result);

    return asyncAdd(result, 90);

}).then((res) => {
    console.log('Must be 93=', res);
}).catch((errorMessage) => {
    console.log(errorMessage);
});