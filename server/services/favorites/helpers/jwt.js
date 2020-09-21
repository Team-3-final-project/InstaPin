const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET;

function encode (obj) {
    return jwt.sign(obj, secretKey);
};

function decode (accesToken) {
    try {
        let decoded = jwt.verify(accesToken, secretKey);
        return decoded;
    } catch (err) {
        return err;
    };
};

module.exports = {
    encode,
    decode
};