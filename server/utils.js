var jwt = require('jsonwebtoken');

function generateToken(user){
    if(!user) return null;

    var u = {
        userId: user.id,
        name: user.name,
        username: user.username,
        isAdmin: user.isAdmin
    };
    return jwt.sign(u, `${process.env.JWT_SECRET}`, {
        expiresIn: 60 * 60 * 24
    });
}

function getCleanUser(user) {
    if(!user) return null;

    return {
        userId: user.id,
        name: user.name,
        username: user.username,
        isAdmin: user.isAdmin
    };
}

module.exports = {
    generateToken,
    getCleanUser
}