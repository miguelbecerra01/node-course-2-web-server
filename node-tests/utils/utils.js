module.exports.add = (a, b) => a + b;

module.exports.asyncAdd = (a, b, callback) => {

    setTimeout(() => {
        callback(a + b);
    }, 1000);

};

module.exports.square = (x) => x * x;

module.exports.asyncSquare = (x, callback) => {
    setTimeout(() => {
        callback(x * x);
    }, 1000);
};

module.exports.setName = (user, fullname) => {

    user.firstName = fullname.split(' ')[0];
    user.lastName = fullname.split(' ')[1];

    return user;
};
